import { Loja } from './loja'; 

function isEmpty(str: string): boolean {
  let spaceCount = str.length - str.replace(" ", "").length;
  return str == null || spaceCount == str.length;
}

export function dados_loja_objeto(loja: Loja) {

  if (isEmpty(loja.logradouro)) {
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }

  if (isEmpty(loja.municipio)) {
    throw new Error(`O campo município do endereço é obrigatório`);
  }

  if (isEmpty(loja.estado)) {
    throw new Error(`O campo estado do endereço é obrigatório`);
  }

  if (isEmpty(loja.cnpj)) {
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }

  if (isEmpty(loja.inscricao_estadual)) {
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }

  var numero1 : string = loja.numero + "";
  if(loja.numero == 0){
    numero1 = "s/n";
  }

  var linha2 = `${loja.logradouro}, ${numero1}`;
  if (! isEmpty(loja.complemento)){
      linha2 += ` ${loja.complemento}`;
  }
  
  var linha3 = "";
  if (! isEmpty(loja.bairro)){
    linha3 += `${loja.bairro} - `;
  }
  linha3 += `${loja.municipio} - ${loja.estado}`;

  var linha4 = "";
  if (! isEmpty(loja.cep)){
    linha4 = `CEP:${loja.cep}`;
  }
  if (! isEmpty(loja.telefone)){
    if (! isEmpty(linha4)){
      linha4 += ` `;
    }
    linha4 += `Tel ${loja.telefone}`;
  }
  if (! isEmpty(linha4)){
    linha4 += `\n`;
  }

  var linha5 = "";
  if (! isEmpty(loja.observacao)){
    linha5 += `${loja.observacao}`;
  }

  let output = `${loja.nome_loja}\n`
  output += `${linha2}\n`
  output += `${linha3}\n`
  output += `${linha4}`
  output += `${linha5}\n`
  output += `CNPJ: ${loja.cnpj}\n`
  output += `IE: ${loja.inscricao_estadual}\n`

  return output;
}