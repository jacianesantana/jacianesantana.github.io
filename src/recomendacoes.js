class Receita{

constructor(){

    this.id = 1;
    this.arrayReceitas = [];
}

    adicionar(){    
    let receita = this.lerDados();

    if(this.validaCampos(receita)){
      this.adicionarArray(receita);
    }
    this.listaTabela();
    this.limpar();

    const somaReceitas = this.arrayReceitas
      .map(receita => parseInt(receita.valorReceita))
      .reduce((acc, atual) => acc + atual, 0);
    
    window.localStorage.setItem("receitas", somaReceitas);
    }

    listaTabela(){
      let tbody = document.getElementById("tbody");
      tbody.innerText ="";

      for(let i = 0; i< this.arrayReceitas.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_email = tr.insertCell();
        let td_descricao = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_delete = tr.insertCell();

        td_id.innerText= this.arrayReceitas[i].id;
        td_email.innerText= this.arrayReceitas[i].emailReceita;
        td_descricao.innerText= this.arrayReceitas[i].descReceita;
        td_valor.innerText= this.arrayReceitas[i].valorReceita;

        
        let imgDelete = document.createElement("img");
        imgDelete.src = "assets/delete.png";
        imgDelete.setAttribute("onclick","receita.deletar("+this.arrayReceitas[i].id +")");

        td_delete.appendChild(imgDelete);

      }
    }
adicionarArray(receita){
this.arrayReceitas.push(receita); 
this.id++;
}

    lerDados(){
      let receita = []
      receita.id = this.id;
      receita.descReceita = document.getElementById("desc1").value;
      receita.valorReceita = document.getElementById("valor1").value;
      receita.emailReceita = document.getElementById("email1").value;

      return receita;
    }
    validaCampos(receita){
      let msg = "";
      if(receita.descReceita == "")
      {
        msg += "- Informe a descrição da Receita \n"
      }
      if(receita.valorReceita == "")
      {
        msg += "- Informe a valor \n"
      }
      if(receita.emailReceita == "")
      {
        msg += "- Informe o E-mail \n"
      }
      
     if(msg !=""){
        alert(msg);
        return false;
      }
      return true;
    }
    limpar(){
      document.getElementById("desc1").value = "";
      document.getElementById("valor1").value="";
    }
   deletar(id){
    let tbody = document.getElementById("tbody");


    for(let i = 0; i < this.arrayReceitas.length; i++){
        
      if(this.arrayReceitas[i].id == id){
          this.arrayReceitas.splice(i,1);
          tbody.deleteRow(i);
    }
   }
   }
    }
    
    class Despesa{

      constructor(){
      
          this.id = 1;
          this.arrayReceitas = [];
      }
      
          adicionar(){    
          let receita = this.lerDados();
      
          if(this.validaCampos(receita)){
            this.adicionarArray(receita);
          }
          this.listaTabela();
          this.limpar();

          const somaDespesas = this.arrayReceitas
            .map(despesa => parseInt(despesa.valorReceita))
            .reduce((acc, atual) => acc + atual, 0);
          
          window.localStorage.setItem("despesas", somaDespesas);
          }
  
          listaTabela(){
            let tbody = document.getElementById("tbody2");
            tbody.innerText ="";
      
            for(let i = 0; i< this.arrayReceitas.length; i++){
              let tr = tbody.insertRow();
      
              let td_id = tr.insertCell();
              let td_email = tr.insertCell();
              let td_descricao = tr.insertCell();
              let td_valor = tr.insertCell();
              let td_delete = tr.insertCell();
           
      
              td_id.innerText= this.arrayReceitas[i].id;
              td_email.innerText= this.arrayReceitas[i].emailReceita;
              td_descricao.innerText= this.arrayReceitas[i].descReceita;
              td_valor.innerText= this.arrayReceitas[i].valorReceita;

              let imgDelete = document.createElement("img");
              imgDelete.src = "assets/delete.png";
              imgDelete.setAttribute("onclick","despesa.deletar("+this.arrayReceitas[i].id +")");

               td_delete.appendChild(imgDelete);

            }
          }
      adicionarArray(receita){
      this.arrayReceitas.push(receita); 
      this.id++;

      }
    
      
          lerDados(){
            let receita = []
            receita.id = this.id;
            receita.descReceita = document.getElementById("desc2").value;
            receita.valorReceita  = document.getElementById("valor2").value;
            receita.emailReceita = document.getElementById("email1").value
      
            return receita;
          }
          validaCampos(receita){
            let msg = "";
            if(receita.descReceita == "")
            {
              msg += "- Informe a descrição da Despesa \n"
            }
            if(receita.valorReceita == "")
            {
              msg += "- Informe a valor \n"
            }
            if(receita.emailReceita == "")
            {
              msg += "- Informe o E-mail \n"
            }
           if(msg !=""){
              alert(msg);
              return false;
            }
            return true;
          }
          limpar(){
            document.getElementById("desc2").value = "";
            document.getElementById("valor2").value="";
          }
          deletar(id){
            let tbody = document.getElementById("tbody2");
        
        
            for(let i = 0; i < this.arrayReceitas.length; i++){
                
              if(this.arrayReceitas[i].id == id){
                  this.arrayReceitas.splice(i,1);
                  tbody.deleteRow(i);
            }
           }
           }
          }
          var despesa = new Despesa;
          var receita = new Receita;