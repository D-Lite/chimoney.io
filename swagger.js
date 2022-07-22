const swaggerAutogen = require("swagger-autogen")()
require("dotenv").config();
 
const doc = {
    info: {
        version: "1.0.0",
        title: "Chimoney Blog API",
        description: "<b>Engineering blog api for chimoney.io</b>. Please, create a user, login using the credentials so you can get the Bearer token and insert at the <b>AUTHORIZE</b> button below"
    },
    host: process.env.NODE_ENV === "DEVELOPMENT" ? "localhost:5000" : "chimoney-blog.herokuapp.com",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
    ],
    securityDefinitions: {
        Authorization: {
            type: "apiKey",
            name: "Authorization",
            description: "Value: Bearer ",
            in: "header",
            scheme: 'bearer'
        }
    },
    definitions: {
        LoginModel: {
            $email: "dee@chi.com",
            $password: "Password123#",            
        },
        RegisterModel: {
            $name: "Daniel Olabemiwo",
            $email: "dee@chi.com",
            $password: "Password123#", 
        },
        UpdateUserModel: {
            $name: "Dee Olabemiwo",
        },
        CategoryModel: {
            $title: "WEB3",
        },
        StoryModel: {
            $category: "6064e654b5c7475bac63ad22",
            $title: "Web3 for Dummies - Getting Started With Moralis Web3UI Kit Library",
            $body: "In this article, we'll be discussing the Web3UI Kit, the first web3 front-end library, and we’ll also build a dApp dashboard with it and Moralis React SDK. We'll build a dApp dashboard that displays all the NFTs and balance of a connected user on the Mainnet, Kovan, Rinkeby, Goerli, and the Ropsten Testnet. After completing this tutorial, you'll have an understanding of how to set up and build a web3 frontend with Web3UI Kit components.",
        },
    }
};

 
const outputFile = "./swagger_output.json";
const endpointFiles = ["./routes/index.js"];
 
swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./index");
});