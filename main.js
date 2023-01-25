const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/images/aprovado.png" alt="Capelo e diploma"/>';
const imgReprovado = '<img src="./images/images/reprovado.png" alt="Capelo e diploma"/>';
const atividades = []; 
const notas=[];
const spanAprovado = '<span class= "resultado aprovado"> Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado"> reprovado</span>';
const notaMinima= parseFloat(prompt ("Digita a nota minima: "));



let linhas = ''; 

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha(); 
    atualizaTabela(); 
    atualizaMediaFinal();    
});


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade= document.getElementById("nota-atividade"); 

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }
    else
    {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha +=`<td>${inputNomeAtividade.value} </td>`;
        linha +=`<td>${inputNotaAtividade.value} </td>`;
        linha +=`<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
        linha +='</tr>';
    
        linhas += linha; 

    }

    inputNomeAtividade.value='';
    inputNotaAtividade.value= '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML=linhas; 
}

function atualizaMediaFinal(){
    const mediaFinal = calcularMediaFinal(); 

    document.getElementById("media-final-valor").innerHTML = mediaFinal;
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;

}

function calcularMediaFinal(){
    let somaNotas= 0; 
    for(let i=0; i< notas.length; i++){
        somaNotas += notas[i]
    }
    return somaNotas / notas.length; //calcular a media
}