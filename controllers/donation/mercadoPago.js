import express from "express";
import cors from "cors";//permite solicitudes de origen cruzado (CORS) entre el cliente y el servidor.
import mercadopago from "mercadopago";

const app = express();

//: Configura la biblioteca de Mercado Pago con el token de acceso.
mercadopago.configure({
  access_token: "TEST-7801551777530631-072421-b8d857604308796d169390c4121cf28f-409887811",
});

app.use(express.json());//mid
app.use(cors());//mid 
app.get("/", function (req, res) {
  res.send("server is working");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: req.body.price,
        quantity: 1,
      },
    ],
    back_urls: {//las urls donde MP redirecciona luego de pagar o haya sido rechazado
      success: "http://localhost:5173/",
      failure: "http://localhost:5173/",
      pending: "",
    },
    auto_return: "approved",//redireccionamiento aut aprobado
  };
//Utiliza la biblio de MP para enviar la soli de creación de la preferencia a la API de 
//MP. La función create() toma como argumento el objeto preference 
  mercadopago.preferences 
    .create(preference)
    .then(function (response) {//en caso de exito devuelve objeto con el id
      res.json({
        id: response.body.id, 
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});
//inicia el servidor Express y lo hace escuchar en el puerto 8080. 
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The server is now running on Port ${PORT}`);
});
