const express = require("express");
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");
const supabase = require("./config/supabase_client")
require("dotenv").config();

const port = process.env.PORT;



// view engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    partialsDir: ['views/partials'] 
}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");
app.use(express.static("public"));

// routes 
app.get("/", async function(req, res) {
    try {
        const { data: results, error } = await supabase.from('products').select('*');
        if (error) throw error;

        // Aqui passamos a lista 'products' para a home
        res.render("home", { products: results }); 
    } catch (err) {
        console.error(err);
        res.render("home", { products: [] });
    }
});

app.get('/produto/:slug', async (req, res) => {
    const slugParams = req.params.slug; // Pega o "raquete-li-ning-carbon-expert" da URL

    try {
        // 1. Busca os dados no Supabase usando o slug
        const { data: product, error } = await supabase
            .from('products')
            .select(`
                *,
                categories (name)
            `)
            .eq('slug', slugParams)
            .single();

        if (error || !product) {
            return res.status(404).send('Produto não encontrado');
        }

        // 2. Renderiza a página product.handlebars enviando os dados do banco
        res.render('product', {
            product: product,
            defaultLayout: "main",
            category_name: product.categories.name, 
            title: product.name 
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(port, function(req, res){
     console.log(`server running in: http://localhost:${port}"`);
});

module.exports = app;