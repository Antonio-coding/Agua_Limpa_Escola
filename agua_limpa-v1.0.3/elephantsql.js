const pg = require('pg');

const conString = "postgres://eubktmpm:CRT4kQj8WhFieNxcAqaFMfrhfa1LEgGx@isabelle.db.elephantsql.com/eubktmpm";
const client = new pg.Client(conString);

client.connect((err) => {
  if (err) {
    return console.error('Erro ao conectar ao PostgreSQL', err);
  }

  // Consulta 1: Buscar escola pela primeira letra
  const queryText1 = `
    SELECT
        e.NO_ESCOLA,
        e.TP_DEPENDENCIA,
        E.TP_SITUACAO_FUNCIONAMENTO,
        m.NO_MUNICIPIO,
        mr.NO_MESORREGIAO,
        sa.IN_AGUA_INEXISTENTE,
        se.IN_ESGOTO_INEXISTENTE
    FROM ESCOLA e
    JOIN MUNICIPIO m ON e.ID_MUNICIPIO = m.ID_MUNICIPIO
    JOIN MESORREGIAO mr ON m.ID_MESORREGIAO = mr.ID_MESORREGIAO
    LEFT JOIN SISTEMA_AGUA sa ON e.ID_ESCOLA = sa.ID_ESCOLA
    LEFT JOIN SISTEMA_ESGOTO se ON e.ID_ESCOLA = se.ID_ESCOLA
    WHERE UPPER(SUBSTRING(e.NO_ESCOLA FROM 1 FOR 1)) = UPPER('E');
  `;

  // Consulta 2: Porcentagem de escolas com água potável
  const queryText2 = `
    SELECT
        (COUNT(sa.ID_ESCOLA) * 100.0 / (SELECT COUNT(*) FROM ESCOLA)) AS percentagem_escolas_com_agua_potavel
    FROM SISTEMA_AGUA sa
    WHERE sa.IN_AGUA_POTAVEL = TRUE;
  `;

  // Consulta 3: Porcentagem de escolas com água fornecida pelo sistema público
  const queryText3 = `
    SELECT
        (COUNT(sa.ID_ESCOLA) * 100.0 / (SELECT COUNT(*) FROM ESCOLA)) AS percentagem_escolas_com_agua_publica
    FROM SISTEMA_AGUA sa
    WHERE sa.IN_AGUA_REDE_PUBLICA = TRUE;
  `;

  // Consulta 4: Porcentagem de escolas com esgoto fornecido pelo sistema público
  const queryText4 = `
    SELECT
        (COUNT(se.ID_ESCOLA) * 100.0 / (SELECT COUNT(*) FROM ESCOLA)) AS percentagem_escolas_com_esgoto_publico
    FROM SISTEMA_ESGOTO se
    WHERE se.IN_ESGOTO_REDE_PUBLICA = TRUE;
  `;

  // Consulta 5: Quantidade de escolas por mesorregião
  const queryText5 = `
    SELECT
        m.NO_MESORREGIAO,
        COUNT(e.ID_ESCOLA) AS quantidade_escolas
    FROM MESORREGIAO m
    JOIN MUNICIPIO mu ON m.ID_MESORREGIAO = mu.ID_MESORREGIAO
    JOIN ESCOLA e ON mu.ID_MUNICIPIO = e.ID_MUNICIPIO
    GROUP BY m.NO_MESORREGIAO
    ORDER BY quantidade_escolas DESC;
  `;

  // Consulta 6: Número de escolas em cada mesorregião que possui sistema de esgoto inexistente
  const queryText6 = `
    SELECT
        m.NO_MESORREGIAO,
        COUNT(se.ID_ESCOLA) AS escolas_com_esgoto_inexistente
    FROM MESORREGIAO m
    JOIN MUNICIPIO mu ON m.ID_MESORREGIAO = mu.ID_MESORREGIAO
    JOIN ESCOLA e ON mu.ID_MUNICIPIO = e.ID_MUNICIPIO
    LEFT JOIN SISTEMA_ESGOTO se ON e.ID_ESCOLA = se.ID_ESCOLA
    WHERE se.IN_ESGOTO_INEXISTENTE
    GROUP BY m.NO_MESORREGIAO;
  `;

  // Consulta 7: Número de escolas em cada mesorregião que possui sistema de água inexistente
  const queryText7 = `
    SELECT
        mr.NO_MESORREGIAO,
        COUNT(sa.ID_ESCOLA) AS escolas_com_agua_inexistente
    FROM MESORREGIAO mr
    JOIN MUNICIPIO mu ON mr.ID_MESORREGIAO = mu.ID_MESORREGIAO
    JOIN ESCOLA e ON mu.ID_MUNICIPIO = e.ID_MUNICIPIO
    LEFT JOIN SISTEMA_AGUA sa ON e.ID_ESCOLA = sa.ID_ESCOLA
    LEFT JOIN SISTEMA_ESGOTO se ON e.ID_ESCOLA = se.ID_ESCOLA
    WHERE sa.IN_AGUA_INEXISTENTE = TRUE
    GROUP BY mr.NO_MESORREGIAO;
  `;

  // Consulta 8: Distribuição de escolas por tipo de sistema de esgoto
  const queryText8 = `
    SELECT
        CASE
            WHEN IN_ESGOTO_REDE_PUBLICA THEN 'Rede Pública'
            WHEN IN_ESGOTO_FOSSA_SEPTICA THEN 'Fossa Séptica'
            WHEN IN_ESGOTO_FOSSA_COMUM THEN 'Fossa Comum'
            WHEN IN_ESGOTO_FOSSA THEN 'Fossa'
            WHEN IN_ESGOTO_INEXISTENTE THEN 'Inexistente'
        END AS tipo_esgoto,
        COUNT(*) AS quantidade_escolas
    FROM SISTEMA_ESGOTO
    GROUP BY tipo_esgoto;
  `;

  // Consulta 9: Distribuição de escolas por tipo de sistema de água
  const queryText9 = `
    SELECT
        CASE
            WHEN IN_AGUA_POTAVEL THEN 'Água Potável'
            WHEN IN_AGUA_REDE_PUBLICA THEN 'Rede Pública'
            WHEN IN_AGUA_POCO_ARTESIANO THEN 'Poço Artesiano'
            WHEN IN_AGUA_CACIMBA THEN 'Cacimba'
            WHEN IN_AGUA_FONTE_RIO THEN 'Fonte de Rio'
            WHEN IN_AGUA_INEXISTENTE THEN 'Inexistente'
        END AS tipo_agua,
        COUNT(*) AS quantidade_escolas
    FROM SISTEMA_AGUA
    GROUP BY tipo_agua;
  `;


  
  // Executar consultas
  client.query(queryText7, (err, result) => {
    if (err) {
      console.error('Erro na consulta 1:', err);
    } else {
      console.log(result.rows);
    }      
      // Finalizar conexão após a última consulta
      client.end();
    });
  });

