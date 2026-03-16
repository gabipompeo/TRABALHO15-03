import express from 'express';

const host ='0.0.0.0'; //todas interfaces de rede possam acessar a nossa rede
const porta = 3000; //aplicacao indetificada pelo numero 3000

const app = express();
    var listaEmpresa=[];

app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.write(`<html lang="pt-br">
        <head>
            <meta charset="UTF-8">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Menu</title>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>
        <body>  `);
    res.write(`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">
            <a class="navbar-brand" href="#">Menu</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse"           id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li class="nav-item">
                    <a class="nav-link" href="/link">Link</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cadastro
                </a>

                <ul class="dropdown-menu">
               
                <li>
                    <a class="dropdown-item" href="/empresa">Empresa</a></li>

                <li><hr class="dropdown-divider"></li>

    
                <li>    
                    <a class="dropdown-item" href="/listaEmpresas">Listar Empresas</a>
                </li>
                </ul>

                <li class="nav-item">
                     <a class="nav-link" href="/logout">Logout</a>
                </li>
                </li>
               
            </ul>

            <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="buscar" aria-label="buscar"/>
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </div>
        </div>
        </nav>
        
        `)
    res.write(` 
        </body> 
        `)

    res.end();
})

//Diferentemente do metodo get, que exigia do usuario a passagem de parametro por meio do metodo post, cria um novo recurso no servidor(um registro,uma imgaem, um comentario,etc)

app.get("/empresa",(requisicao,resposta)=>{
   

    resposta.write(`
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Cadastro de Empresas</title>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>

        <body>
            <div class="container mt-5">
                <form method="POST" action="/empresa" class="row  gy-2 gx-3 align-items-center border p-3  ">
                <legend>
                    <h3>Cadastre Empresas</h3>
                </legend>

                <div class="row mb-3">
                    <label class="sr-only" for="cnpj"
                    >CNPJ</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="cnpj" name="cnpj" >
                </div> 
                
                <div class="row mb-3">
                    <label class="sr-only" for="razãoSocial"
                    >Razão Social</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="razãoSocial" name="razãoSocial" >
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="nomeFantasia"
                    >Nome Fantasia</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" 
                    id="nomeFantasia" name="nomeFantasia">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="endereco" 
                    >Endereço</label>
                    <input type="text" class="form-control mb-2 mr-sm-2"
                    id="endereco" name="endereco">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="cidade" 
                    >Cidade</label>
                    <input type="text" class="form-control mb-2 mr-sm-2"
                    id="cidade" name="cidade">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="uf" 
                    >UF</label>
                    <input type ="text" class="form-control mb-2 mr-sm-2"
                    id="uf" name="uf">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="cep" 
                    >CEP</label>
                    <input type ="text" class="form-control mb-2 mr-sm-2"
                    id="cep" name="cep">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="email" 
                    >Email</label>
                    <input type ="text" class="form-control mb-2 mr-sm-2"
                    id="email" name="email">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="telefone" 
                    >Telefone</label>
                    <input type= "text" class="form-control mb-2 mr-sm-2"
                    id="telefone" name="telefone">
                </div>


                <div class="row mb-3">
                    <button type="submit" class="btn btn-primary mb-2">Cadastrar Empresa</button>
                </div>
                </form>
            </div>
        </body>
        </html>
        `);
    resposta.end()
})
//Espera por dados de um formulario html

app.post("/empresa",(requisicao,resposta)=>{


//Usando o metodo POst o formulario html envia os seus dados no corpo da requisição

    const cnpj = requisicao.body.cnpj;
    const razaoSocial = requisicao.body.razaoSocial;
    const nomeFantasia = requisicao.body.nomeFantasia;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;
    const cep = requisicao.body.cep;
    const email = requisicao.body.email;
    const telefone = requisicao.body.telefone;

    //n ter campos vazios
    if (!cnpj || !razaoSocial || !nomeFantasia || !endereco || !cidade || !uf || !cep || !email || !telefone) {
        let html = `
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Empresas</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>

        <body>
            <div class="container mt-5">
                <form method="POST" action="/empresa" class="row  gy-2 gx-3 align-items-center border p-3  ">
                <legend>
                    <h3>Cadastre Empresas</h3>
                </legend>

                <div class="row mb-3">
                    <label class="sr-only" for="cnpj">CNPJ</label>
                    <input type="text" class="form-control " id="cnpj" name="cnpj" value="${cnpj|| ""}" > `;
                if (!cnpj){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o cnpj
                        </div>
                    `;
                }
                html += ` 
                </div> 
                

                <div class="row mb-3">
                    <label class="sr-only" for="razaoSocial">Razão Social</label>
                    <input type="text" class="form-control " id="razaoSocial" name="razaoSocial" value="${razaoSocial}">`;
                if (!razaoSocial){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe a Razao Social.
                        </div>
                    `;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="nomeFantasia"
                    >Nome Fantasia</label>
                    <input type="text" class="form-control" 
                    id="nomeFantasia" name="nomeFantasia" value="${nomeFantasia || ""}">`;
                
                if (!nomeFantasia){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o Nome Fantasia da empresa!
                        </div>
                    `;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="endereco" 
                    >Endereço</label>
                    <input type= "text" class="form-control"
                    id="endereco" name="endereco" value="${endereco || ""}">`;
                if (!endereco){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o endereço da empresa.
                        </div>`;
                }
                html +=`

                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="cidade" 
                    >Cidade</label>
                    <input type= "text" class="form-control "
                    id="cidade" name="cidade" value="${cidade || ""}">`;
                    if (!cidade){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe a cidade da empresa.
                        </div>`;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="uf" 
                    >UF</label>
                    <input type= "text" class="form-control "
                    id="uf" name="uf" value="${uf || ""}">`;
                if (!uf){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe a UF empresa.
                        </div>`;
                }
                html +=`

                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="cep" 
                    >CEP</label>
                    <input type= "text" class="form-control "
                    id="cep" name="cep" value="${cep || ""}">`;
                if (!cep){
                html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe CEP da empresa.
                        </div>`;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="email" 
                    >Email</label>
                    <input type= "text" class="form-control "
                    id="email" name="email" value="${email || ""}">`;
                if (!email){
                html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o email.
                        </div>`;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="telefone" 
                    >Telefone</label>
                    <input type= "text" class="form-control"
                    id="telefone" name="telefone" value="${telefone || ""}">`;
                if (!telefone){
                html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o telefone.
                        </div>`;
                }
                html +=`
                </div>


                <div class="row mb-3">
                    <button type="submit" class="btn btn-primary mb-2">Cadastrar Empresa</button>
                </div>
                </form>
            </div>
        </body>
        </html>`;

        resposta.write(html);
        resposta.end();
    }
    else {

    listaEmpresa.push({
        "cnpj":cnpj,
        "razaoSocial":razaoSocial,
        "nomeFantasia":nomeFantasia,
        "endereco":endereco,
        "cidade":cidade,
        "uf":uf,
        "cep":cep,
        "email":email,
        "telefone":telefone
    })
    resposta.redirect("/listaEmpresas");
    }
});
        

    app.get("/listaEmpresas",(requisicao,resposta)=>{
        resposta.write(`<html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lista de Empresas</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>

        <body>
            <div class="container mt-5">
                <table class="table table-stripe table-hover">
                    <thead>
                                    <th scope="col">Id</th>
                                    <th scope="col">CNPJ</th>
                                    <th scope="col">Razao Social</th>
                                    <th scope="col">Nome Fantasia</th>
                                    <th scope="col">Endereco</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">UF</th>
                                    <th scope="col">CEP</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefone</th>
                    </thead>
                    <tbody>
            `);

            for(let i = 0;i<listaEmpresa.length;i++)
            {
                const empresa = listaEmpresa[i];
                resposta.write(`
                        <tr>
                            <td>${i+1}</td>
                            <td>${empresa.cnpj}</td>
                            <td>${empresa.razaoSocial}</td>
                            <td>${empresa.nomeFantasia}</td>
                            <td>${empresa.endereco}</td>
                            <td>${empresa.cidade}</td>
                            <td>${empresa.uf}</td>
                            <td>${empresa.cep}</td>
                            <td>${empresa.email}</td>
                            <td>${empresa.telefone}</td>
                        </tr>
                    `)
            }

            resposta.write(`
                        </tbody>
                    </table>
                </div>
                    <a href="/empresa" class="btn btn-primary mt-3">Continuar cadastrando</a>
                </body>
                </html>
                `);
        resposta.end();
    })

app.get("/login" , (requisicao, resposta) => {
    resposta.write(`
        
        `);
    
    resposta.end();
});

app.listen(porta,host,()=>{
    console.log(`Servidor rodando em http://${host}:${porta}`);
})