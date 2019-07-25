import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  /**
   * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
   */
  public getDB() {
    return this.sqlite.create({
      name: 'mydbsemi_oficial.db',
      location: 'default'
    });
  }

  /**
   * Cria a estrutura inicial do banco de dados
   */
  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

        // Inserindo dados padrões da tabela categoria
        this.insertDefaultItems(db);

        //Inserindo dados padrões da tabela subcategoria - Assistência Social
        this.insertDefaultItemsAss(db);

      })
      .catch(e => console.log(e));
  }

  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
      ['CREATE TABLE IF NOT EXISTS subcategories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT,cat_id integer, FOREIGN KEY(cat_id) REFERENCES categories(id))'],
      ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, number INTEGER, conserv TEXT, base64 TEXT, active integer, category_id integer, sub_id integer, FOREIGN KEY(category_id) REFERENCES categories(id), FOREIGN KEY(sub_id) REFERENCES subcategories(id))']
 
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  /**
   * Incluindo os dados padrões
   * @param db
   */
  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from categories', {})
    .then((data: any) => {
      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          ['insert into categories (name) values (?)', ['Executivo']],
          ['insert into categories (name) values (?)', ['Assistência Social']],
          ['insert into categories (name) values (?)', ['Saúde']]
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }

  private insertDefaultItemsAss(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from subcategories', {})
    .then((data1: any) => {
      //Se não existe nenhum registro
      if (data1.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          //------------------------------EXECUTIVO----------------------------------------------
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Ação Urbana', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Agrícola - Açouge', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Almoxarifado', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Atividades do Ensino Fundamental', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Avaliação', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Banco do Povo', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Biblioteca Municipal', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Casa da Apicultura', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['CMEI Claudia Barros', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['CMEI Crianças Crescendo', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['CMEI Silvia de Queiroz', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['CMEI Valeria Perilo', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Conselho Tutelar', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Controle Interno', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Cozinha Prefeitura', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Creche Espirita Maria Dolores', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Departamento de Compras', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Departamento Jurídico', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Desporto e Lazer', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Agrícola', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Agrícola - GADO', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Agrícola Comendador João Marchesi', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Mun. Dolores Martins', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Mun. Francisco Rodrigues Rebouças', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Mun. Lourival de Oliveira Lobo', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Mun. Nestor de Macedo Neto', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Mun. Soraya Saiva Vilela', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Escola Mun. Izaura Maria da Silva', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Executivo - FROTA', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Gabinete', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Garagem', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Garagem/Frota', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Ginásio de Esportes', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Guarda Mirim', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Licitações e Contratos', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manutenção Sec. de Administração', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['PABX', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Protocolo', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Recepção Gabinete', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Recursos Humanos', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Secretaria da Fazenda', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Secretaria da Educação', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Secretaria de Planejamento', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Secretaria de Transporte', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Setor de Arrecadação', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Setor de Contabilidade', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Setor de Meio Ambiente', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Setor Junta de Serviços Militares', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['SUCATA - Executivo', 1]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Unidade Prisional - Soraya', 1]],
          //----------------------------------- ASSISTENCIA SOCIAL
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Sec. Assistencia social', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Conselho Tutelar', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['SUCATA - Assistencia social', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['C. ATENDIMENTO A FAMILIA GENI BOM', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['CRAS', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Centro Convivencia - Geni Bontempo', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Secretaria de Assistencia Social', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. Bolsa Familia', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['SCSV', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. Do SCFV - PETI', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Criança Feliz', 2]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. Abrigo Raio de Luz', 2]],
          //------------------------------------ SAÚDE --------------------------------------------------------------
          ['insert into subcategories (name, cat_id) values (?, ?)', ['CAIS', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Centro de Reabilitação - CER', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Frota Saúde', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Hospital Municipal Abiud Ponciano Dias', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. da Sec. de Saúde', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. da Vigilância Epidemiologica', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. da Vigilância Sanitária', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. das Ativ. do Centro Odontologico', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. do Prog. de Combate a Dengue - FUNASA', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Manut. do SAMU', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Secretaria Saúde: Atenção Assistida', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['SUCATA - SAÚDE', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Antonio Dorival F. Melo - Gueroba', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Jose Pimenta - Bairro Goias ', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Jovencio Costa - Nova Jussara ', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Maria Rita - Setor Planalto ', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Mini Cais', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Onesia Candida - Vila Nova ', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Ermelino Siqueira - Alto Boa Vista', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Iraci Candida Ferraz - 3 de maio', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['UBS - Jesus Caetano - Campo Alegre', 3]],
          ['insert into subcategories (name, cat_id) values (?, ?)', ['Unidade Móvel Odontologica', 3]]
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de sub-categorias', e));
  }
}
