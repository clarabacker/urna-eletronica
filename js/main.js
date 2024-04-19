// Objeto que armazena os candidatos por turma e ano
let candidatosPorTurma = {
    "1": { // 1º ano
        "111": [ // Turma 111M
            { nome: "Candidato 1", numero: "111", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "112", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "113", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "114", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "115", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "116", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "117", foto: "candidato3.png", sexo: "F" },
        ],
        "112": [ // Turma 112M
            { nome: "Candidato 1", numero: "121", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "122", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "123", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "124", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "125", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "126", foto: "candidato2.png", sexo: "F" },
        ],
        "113": [ // Turma 113T
            { nome: "Candidato 1", numero: "131", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 2", numero: "132", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 3", numero: "133", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "134", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "135", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 6", numero: "136", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 7", numero: "137", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "138", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 9", numero: "139", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 10", numero: "001", foto: "candidato4.png", sexo: "F" },
        ],
        "114": [ // Turma 114T
            { nome: "Candidato 1", numero: "141", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "142", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "143", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "144", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "145", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "146", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "147", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "148", foto: "candidato4.png", sexo: "F" },
            {nome: "Candidato 9", numero: "149", foto: "candidato1.png", sexo: "F" },
        ],
        "115": [ // Turma 115T
            { nome: "Candidato 1", numero: "151", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "152", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "153", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "154", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "155", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "156", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "157", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 8", numero: "158", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 9", numero: "159", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 10", numero: "002", foto: "candidato2.png", sexo: "M" },
        ],
    },
    "2": { // 2º ano
        "121": [ // Turma 121M
            { nome: "Candidato 1", numero: "211", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "212", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "213", foto: "candidato3.png", sexo: "F" },
        ],
        "122": [ // Turma 122M
            { nome: "Candidato 1", numero: "221", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "222", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "223", foto: "candidato3.png", sexo: "F" },
        ],
        "123": [ // Turma 123T
            { nome: "Candidato 1", numero: "231", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "232", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "233", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "234", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "235", foto: "candidato1.png", sexo: "F" },
        ],
        "124": [ // Turma 124T
            { nome: "Candidato 1", numero: "241", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "242", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "243", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "244", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "245", foto: "candidato1.png", sexo: "F" },
        ],
        "125": [ // Turma 125T
            { nome: "Candidato 1", numero: "251", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "252", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "253", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "254", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "255", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "256", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "257", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 8", numero: "258", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 9", numero: "259", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 10", numero: "003", foto: "candidat2.png", sexo: "M" },
        ],
        "126": [ // Turma 126T
            { nome: "Candidato 1", numero: "261", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "262", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "263", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "264", foto: "candidato4.png", sexo: "M" },
        ],
        "127": [ // Turma 127T
            { nome: "Candidato 1", numero: "271", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "272", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "273", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "274", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "275", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "276", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "277", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 8", numero: "278", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 9", numero: "279", foto: "candidato1.png", sexo: "M" },
        ],
    },
    "3": { // 3º ano
        "131": [ // Turma 131M
            { nome: "Candidato 1", numero: "311", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "312", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "313", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "314", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "315", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "316", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "317", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "318", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 9", numero: "319", foto: "candidato1.png", sexo: "M" },
        ],
        "132": [ // Turma 132M
            { nome: "Candidato 1", numero: "321", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "322", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "323", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "324", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "325", foto: "candidato5.png", sexo: "M" },
        ],
        "133": [ // Turma 133T
            { nome: "Candidato 1", numero: "331", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "332", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "333", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "334", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "335", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "336", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "337", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 8", numero: "338", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 9", numero: "339", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 10", numero: "004", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 11", numero: "005", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 12", numero: "006", foto: "candidato3.png", sexo: "M" },
        ],
        "134": [ // Turma 134T
            { nome: "Candidato 1", numero: "341", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "342", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "343", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "344", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "345", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "346", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "347", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "348", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 9", numero: "349", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 10", numero: "007", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 11", numero: "008", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 12", numero: "009", foto: "candidato4.png", sexo: "F" },
        ],
        "135": [ // Turma 135T
            { nome: "Candidato 1", numero: "351", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "352", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "353", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "354", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "355", foto: "candidato5.png", sexo: "M" },
            { nome: "Candidato 6", numero: "356", foto: "candidato6.png", sexo: "F" },
            { nome: "Candidato 7", numero: "357", foto: "candidato7.png", sexo: "F" },
        ],
        "136": [ // Turma 136T
            { nome: "Candidato 1", numero: "361", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "362", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "363", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "364", foto: "candidato4.png", sexo: "F" },
        ],
        "137": [ // Turma 137T
            { nome: "Candidato 1", numero: "371", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "372", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "373", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "374", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "375", foto: "candidato1.png", sexo: "M" },
        ],
        "138": [ // Turma 138T
            { nome: "Candidato 1", numero: "381", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "382", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "383", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "384", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "385", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "386", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "387", foto: "candidato3.png", sexo: "F" },
        ],
    },
    "4": { // 4º ano
        "141": [ // Turma 141M
            { nome: "Candidato 1", numero: "411", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "412", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "413", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "414", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "415", foto: "candidato1.png", sexo: "M" },
        ],
        "142": [ // Turma 142M
            { nome: "Candidato 1", numero: "421", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "422", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "423", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "424", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "425", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "426", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "427", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "428", foto: "candidato4.png", sexo: "M" },
        ],
        "143": [ // Turma 143M
            { nome: "Candidato 1", numero: "431", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "432", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "433", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "434", foto: "candidato4.png", sexo: "F" },
        ],
        "144": [ // Turma 144T
            { nome: "Candidato 1", numero: "441", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "442", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "443", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "444", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "445", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "446", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "447", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "448", foto: "candidato4.png", sexo: "F" },
        ],
        "145": [ // Turma 145T
            { nome: "Candidato 1", numero: "451", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "452", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "453", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "454", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "455", foto: "candidato5.png", sexo: "F" },
        ],
        "146": [ // Turma 146T
            { nome: "Candidato 1", numero: "461", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "462", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "463", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "464", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "465", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "466", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "467", foto: "candidato3.png", sexo: "F" },
        ],
        "147": [ // Turma 137T
            { nome: "Candidato 1", numero: "471", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "472", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "473", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "474", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "475", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "476", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "477", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 8", numero: "478", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 9", numero: "479", foto: "candidato1.png", sexo: "M" },
        ],
        "148": [ // Turma 138T
            { nome: "Candidato 1", numero: "481", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "482", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "483", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "484", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "485", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "486", foto: "candidato2.png", sexo: "F" },
        ],
        "149": [ // Turma 149T
            { nome: "Candidato 1", numero: "491", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "492", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "493", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "494", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "495", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "496", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 7", numero: "497", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 8", numero: "498", foto: "candidato4.png", sexo: "F" },
        ],
    },
    "5": { // 5º ano
        "151": [ // Turma 151M
            { nome: "Candidato 1", numero: "511", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "512", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "513", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "514", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "515", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 6", numero: "516", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 7", numero: "517", foto: "candidato3.png", sexo: "M" },
        ],
        "152": [ // Turma 152M
            { nome: "Candidato 1", numero: "521", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "522", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "523", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "524", foto: "candidato4.png", sexo: "F" },
        ],
        "153": [ // Turma 153T
            { nome: "Candidato 1", numero: "531", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "532", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "533", foto: "candidato3.png", sexo: "F" },
        ],
        "154": [ // Turma 154T
            { nome: "Candidato 1", numero: "541", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "542", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "543", foto: "candidato3.png", sexo: "F" },
            { nome: "Candidato 4", numero: "544", foto: "candidato4.png", sexo: "F" },
            { nome: "Candidato 5", numero: "545", foto: "candidato1.png", sexo: "M" },
        ],
        "155": [ // Turma 155T
            { nome: "Candidato 1", numero: "551", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "552", foto: "candidato2.png", sexo: "F" },
            { nome: "Candidato 3", numero: "553", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "554", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "555", foto: "candidato5.png", sexo: "M" },
            { nome: "Candidato 6", numero: "556", foto: "candidato6.png", sexo: "F" },
        ],
        "156": [ // Turma 156T
            { nome: "Candidato 1", numero: "561", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "562", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "563", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "564", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "565", foto: "candidato1.png", sexo: "M" },
        ],
        "157": [ // Turma 157T
            { nome: "Candidato 1", numero: "571", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 2", numero: "572", foto: "candidato2.png", sexo: "M" },
            { nome: "Candidato 3", numero: "573", foto: "candidato3.png", sexo: "M" },
            { nome: "Candidato 4", numero: "574", foto: "candidato4.png", sexo: "M" },
            { nome: "Candidato 5", numero: "575", foto: "candidato1.png", sexo: "M" },
            { nome: "Candidato 6", numero: "576", foto: "candidato2.png", sexo: "F" },
        ],
    },
    "6": { // 6º ano
        "161": [ // Turma 161M
            { nome: "Candidato 1", numero: "611", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "612", foto: "candidato5.png", sexo: "F" },
        ],
        "162": [ // Turma 162M
            { nome: "Candidato 1", numero: "621", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "622", foto: "candidato3.png", sexo: "F" },
        ],
        "163": [ // Turma 163M
            { nome: "Candidato 1", numero: "631", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "632", foto: "candidato3.png", sexo: "F" },
        ],
        "164": [ // Turma 164M
            { nome: "Candidato 1", numero: "641", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "642", foto: "candidato3.png", sexo: "F" },
        ],
        "165": [ // Turma 165M
            { nome: "Candidato 1", numero: "651", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "652", foto: "candidato3.png", sexo: "F" },
        ],
        "166": [ // Turma 166T
            { nome: "Candidato 1", numero: "661", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "662", foto: "candidato3.png", sexo: "F" },
        ],
        "167": [ // Turma 167T
            { nome: "Candidato 1", numero: "671", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "672", foto: "candidato3.png", sexo: "F" },
        ],
    },
    "7": { // 7º ano
        "171": [ // Turma 171M
            { nome: "Candidato 1", numero: "711", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "712", foto: "candidato5.png", sexo: "F" },
        ],
        "172": [ // Turma 172M
            { nome: "Candidato 1", numero: "721", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "722", foto: "candidato3.png", sexo: "F" },
        ],
        "173": [ // Turma 173M
            { nome: "Candidato 1", numero: "731", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "732", foto: "candidato3.png", sexo: "F" },
        ],
        "174": [ // Turma 174M
            { nome: "Candidato 1", numero: "741", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "742", foto: "candidato3.png", sexo: "F" },
        ],
        "175": [ // Turma 175M
            { nome: "Candidato 1", numero: "751", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "752", foto: "candidato3.png", sexo: "F" },
        ],
        "176": [ // Turma 176M
            { nome: "Candidato 1", numero: "761", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "762", foto: "candidato3.png", sexo: "F" },
        ],
        "177": [ // Turma 177T
            { nome: "Candidato 1", numero: "771", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "772", foto: "candidato3.png", sexo: "F" },
        ],
    },
    "8": { // 8º ano
        "181": [ // Turma 181M
            { nome: "Candidato 1", numero: "811", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "812", foto: "candidato5.png", sexo: "F" },
        ],
        "182": [ // Turma 182M
            { nome: "Candidato 1", numero: "821", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "822", foto: "candidato3.png", sexo: "F" },
        ],
        "183": [ // Turma 183M
            { nome: "Candidato 1", numero: "831", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "832", foto: "candidato3.png", sexo: "F" },
        ],
        "184": [ // Turma 184M
            { nome: "Candidato 1", numero: "841", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "842", foto: "candidato3.png", sexo: "F" },
        ],
        "185": [ // Turma 185M
            { nome: "Candidato 1", numero: "851", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "852", foto: "candidato3.png", sexo: "F" },
        ],
        "186": [ // Turma 186M
            { nome: "Candidato 1", numero: "861", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "862", foto: "candidato3.png", sexo: "F" },
        ],
    },
    "9": { // 9º ano
        "191": [ // Turma 191M
            { nome: "Candidato 1", numero: "911", foto: "candidato1.png", sexo: "F" },
            { nome: "Candidato 2", numero: "912", foto: "candidato5.png", sexo: "F" },
        ],
        "192": [ // Turma 192M
            { nome: "Candidato 1", numero: "921", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "922", foto: "candidato3.png", sexo: "F" },
        ],
        "193": [ // Turma 193M
            { nome: "Candidato 1", numero: "931", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "932", foto: "candidato3.png", sexo: "F" },
        ],
        "194": [ // Turma 194M
            { nome: "Candidato 1", numero: "941", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "942", foto: "candidato3.png", sexo: "F" },
        ],
        "195": [ // Turma 195M
            { nome: "Candidato 1", numero: "951", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "952", foto: "candidato3.png", sexo: "F" },
        ],
        "196": [ // Turma 196M
            { nome: "Candidato 1", numero: "961", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "962", foto: "candidato3.png", sexo: "F" },
        ],
        "197": [ // Turma 197M
            { nome: "Candidato 1", numero: "971", foto: "candidato5.png", sexo: "F" },
            { nome: "Candidato 2", numero: "972", foto: "candidato3.png", sexo: "F" },
        ],
    },
}

// Objeto que armazena os votos da votação atual
let votos = {
    "ano": "",
    "turma": "",
    "resultados": [],
}


const buttons = document.querySelectorAll(".button")
let mensagem = document.querySelector("#mensagem")
let mensagem2 = document.querySelector("#mensagem2")
let mensagemDeErro = document.querySelector("#mensagem-erro")
let divCaixasDeEntrada = document.querySelector("#caixas-de-entrada")
let caixas = document.querySelectorAll(".caixa")
let digitos = document.querySelectorAll(".digito")
let digito1 = "", digito2 = "", digito3 = ""
let divCandidatos = document.querySelector("#candidatos")
let ano = "", turma="", voto = ""
let btnEncerrar = document.querySelector("#buttonEncerrarVotacao")


// Define o novo src quando o mouse passa por cima da imagem
btnEncerrar.onmouseover = function() {
    this.src = "https://clarabacker.github.io/urna-eletronica/imagens/icon_encerrar_hover.png"
}
  
// Retorna para o src original quando o mouse sai de cima da imagem
btnEncerrar.onmouseout = function() {
    this.src = "https://clarabacker.github.io/urna-eletronica/imagens/icon_encerrar.png"
}

// Função para encerrar a votação ao clicar em btnEncerrar
btnEncerrar.onclick = function() {
    console.log(votos)

    divCandidatos.classList.add("candidatos-desativados")
    divCandidatos.classList.remove("candidatos-ativados")

    divCaixasDeEntrada.classList.remove("caixas-desativadas")
    divCaixasDeEntrada.classList.add("caixas-ativadas")

    // Oculta todas as digitos de entrada
    document.querySelectorAll(".caixa").forEach(caixa => {
        caixa.style.display = "none"
    })
    // Exibe apenas a primeira caixa de entrada
    document.querySelector(".caixa1").style.display = "flex"
            
    caixas.forEach(caixa => {
        caixa.style.border = "2px solid black"
    })
    limparDigitos()
    
    mensagem.innerText = "FIM DA VOTAÇÃO"
    mensagem2.innerText = "Digite 1 para gerar o PDF"
    mensagemDeErro.innerText = ""
}

// Função para atualizar informações do candidato na interface
function atualizarCandidato(numeroElemento) {
    const candidatos = candidatosPorTurma[ano][turma]
    const candidatoElemento = document.querySelector('.candidato')

    const candidato = candidatos.find(c => c.numero === numeroElemento)
    console.log(candidato)
        
    const nomeElemento = candidatoElemento.querySelector('p:nth-of-type(1)')
    nomeElemento.innerText = candidato.nome

    const fotoElemento = candidatoElemento.querySelector('.foto')
    fotoElemento.style.backgroundImage = `url('https://clarabacker.github.io/urna-eletronica/imagens/${candidato.foto}')`
    fotoElemento.style.backgroundSize = 'cover'
}


buttons.forEach(button => {
    button.addEventListener("click", function() {
        const valor = this.getAttribute("data-number") || this.getAttribute("data-branco") || 
        this.getAttribute("data-corrige") || this.getAttribute("data-confirma")

        if (valor === "BRANCO") {
            votarBranco()
        } else if (valor === "CORRIGE") {
            limparDigitos()
        } else if (valor === "CONFIRMA") {
            confirmar()
        } else if (this.getAttribute("data-number") !== null) {
            lidarComNúmeroClicado(valor)
        }
    })
})

// Função para atualizar os dígitos na interface
function atualizardigitos() {
    digitos[0].textContent = digito1
    digitos[1].textContent = digito2
    digitos[2].textContent = digito3

    if(mensagem.innerText == "Digite o número do seu candidato:") {
        divCandidatos.classList.remove("candidatos-ativados")
        divCandidatos.classList.add("candidatos-desativados")
    }
}

// Função para limpar os dígitos
function limparDigitos() {
    digito1 = ""
    digito2 = ""
    digito3 = ""

    atualizardigitos()
}

// Função para lidar com o clique em uma tecla numérica
function lidarComNúmeroClicado(numero) {
    if (digitos[0].innerText === "") {
        digito1 = numero
    }
    else if (digitos[1].innerText === "") {
        digito2 = numero
    }
    else if (digitos[2].innerText === "") {
        digito3 = numero
    }
    atualizardigitos()

    if(digito1 !== "" && digito2 !== "" && digito3 !== "" && mensagem.innerText == "Digite o número do seu candidato:") {
        const numeroCandidato = digito1 + digito2 + digito3

        // Verifica se o número do candidato é válido
        if (verificarNumeroCandidato(ano, turma, numeroCandidato)) {
            divCandidatos.classList.remove("candidatos-desativados")
            divCandidatos.classList.add("candidatos-ativados")
            atualizarCandidato(numeroCandidato)

            caixas.forEach(caixa => {
                caixa.style.border = "2px solid black"
            })
            mensagemDeErro.innerText = ""
        }
    }
}

// Função de resposta ao clique na tecla "Confirma"
function confirmar() {

    if(mensagem.innerText === 'Aperte "Confirma" para iniciar a votação!') {

        limparDigitos()
        
        mensagem.innerText = "Digite o ano:"

        divCaixasDeEntrada.classList.remove("caixas-desativadas")
        divCaixasDeEntrada.classList.add("caixas-ativadas")

        // Oculta todos os digitos de entrada
        document.querySelectorAll(".caixa").forEach(caixa => {
            caixa.style.display = "none"
        })
        
        // Exibe apenas a primeira caixa de entrada
        document.querySelector(".caixa1").style.display = "flex"

        return
    }
    
    if(mensagem.innerText === "Digite o ano:") {

        if(digito1 == "") {
            caixas[0].style.border = "2px solid red"
            return
        }

        // Verifica se o ano é válido
        if(verificarAno(digito1)) {
            ano = digito1
            votos.ano = ano
            console.log(`O ${ano}º ano existe.`)
        }
        else {
            caixas[0].style.border = "2px solid red"
            mensagemDeErro.innerText = "Ano inválido! Tente novamente."
            console.log(`O ${ano}° ano não existe.`)
            return
        }


        caixas.forEach(caixa => {
            caixa.style.border = "2px solid black"
        })
        limparDigitos()

        mensagem.innerText = "Digite a turma:"

        divCaixasDeEntrada.classList.remove("caixas-desativadas")
        divCaixasDeEntrada.classList.add("caixas-ativadas")

        caixas.forEach(caixa => {
            caixa.style.display = "flex"
        })

        mensagemDeErro.innerText = ""

        return
    }

    if(mensagem.innerText === "Digite a turma:") {

        if(digito1 == "" || digito2 == "" || digito3 == "") {
            caixas.forEach(caixa => {
                caixa.style.border = "2px solid red"
            })
            return
        }

        let turmaTemporaria = digito1+digito2+digito3

        // Verifica se a turma é válida
        if(verificarTurma(ano, turmaTemporaria)) {
            turma = turmaTemporaria
            votos.turma = turma
            console.log(`A turma ${turma} existe no ${ano}º ano.`)
        }
        else {
            caixas.forEach(caixa => {
                caixa.style.border = "2px solid red"
            })

            mensagemDeErro.innerText = "Turma inválida! Tente novamente."
            console.log(`A turma ${turma} não existe no ${ano}º ano .`)
            return
        }

        caixas.forEach(caixa => {
            caixa.style.border = "2px solid black"
        })
        limparDigitos()

        mensagem.innerText = "Digite o número do seu candidato:"

        divCaixasDeEntrada.classList.remove("caixas-desativadas")
        divCaixasDeEntrada.classList.add("caixas-ativadas")

        console.log(candidatosPorTurma[ano][turma])

        mensagemDeErro.innerText = ""

        return
    }

    if(mensagem.innerText === "Digite o número do seu candidato:") {

        if(digito1 == "" || digito2 == "" || digito3 == "") {
            caixas.forEach(caixa => {
                caixa.style.border = "2px solid red"
            })
            return
        }

        voto = digito1+digito2+digito3

        // Verifica se o número do candidato é válido
        if (verificarNumeroCandidato(ano, turma, voto)) {
            votos.resultados.push(voto)
            console.log(`O número do candidato ${voto} existe na turma ${turma} do ${ano}º ano.`)
        } else {
            caixas.forEach(caixa => {
                caixa.style.border = "2px solid red"
            })

            mensagemDeErro.innerText = "Número inválido! Tente novamente."
            console.log(`O número do candidato ${voto} não existe na turma ${turma} do ${ano}º ano.`)
            return
        }

        caixas.forEach(caixa => {
            caixa.style.border = "2px solid black"
        })
        limparDigitos()

        mensagem.innerText = "VOTO CONFIRMADO"

        divCandidatos.classList.add("candidatos-desativados")
        divCandidatos.classList.remove("candidatos-ativados")

        divCaixasDeEntrada.classList.add("caixas-desativadas")
        divCaixasDeEntrada.classList.remove("caixas-ativadas")

        mensagemDeErro.innerText = ""

        // Após 2 segundos, restaura o estado para próxima votação
        setTimeout(function() {
            caixas.forEach(caixa => {
                caixa.style.display = "flex"
                caixa.style.border = "2px solid black"
            })
            limparDigitos()
            
            mensagem2.innerText = ""
            mensagem.innerText = "Digite o número do seu candidato:"
    
            divCandidatos.classList.remove("candidatos-ativados")
            divCandidatos.classList.add("candidatos-desativados")
    
            divCaixasDeEntrada.classList.remove("caixas-desativadas")
            divCaixasDeEntrada.classList.add("caixas-ativadas")
    
            
            console.log(candidatosPorTurma[ano][turma])
    
            mensagemDeErro.innerText = ""
        }, 2000) // 2000 milissegundos = 2 segundos

        return
    }

    if(mensagem.innerText == "FIM DA VOTAÇÃO") {

        atualizardigitos()

        // Verifica se foi digitado '2' para reiniciar a votação
        if(digito1 == "2" && mensagemDeErro.innerText == 'Erro: Não é possível gerar o PDF sem fornecer o ano e a turma. Digite 2 se quiser reiniciar.') {
            reiniciarVotacao()
            return
        }
        // Verifica se foi digitado '2' para voltar e corrigir a turma
        if(digito1 == "2" && mensagemDeErro.innerText == 'Erro: Não é possível gerar o PDF sem fornecer a turma. Digite 2 se quiser voltar.') {
            mensagem.innerText = "Digite a turma:"
            mensagem2.innerText = ""
            mensagemDeErro.innerText = ""       
    
            caixas.forEach(caixa => {
                caixa.style.display = "flex"
                caixa.style.border = "2px solid black"
            })
            limparDigitos()

            divCaixasDeEntrada.classList.remove("caixas-desativadas")
            divCaixasDeEntrada.classList.add("caixas-ativadas")

            return
        }

        if(ano=="") {
            mensagemDeErro.innerText = 'Erro: Não é possível gerar o PDF sem fornecer o ano e a turma. Digite 2 se quiser reiniciar.'
            caixas[0].style.border = "2px solid red"
            return
        }

        if(turma=="") {
            mensagemDeErro.innerText = 'Erro: Não é possível gerar o PDF sem fornecer a turma. Digite 2 se quiser voltar.'
            caixas[0].style.border = "2px solid red"
            return
        }

        if(digito1 == "") {
            caixas[0].style.border = "2px solid red"
            return
        }

        caixas.forEach(caixa => {
            caixa.style.border = "2px solid black"
        })

        if(digito1=="1") {
            gerarPDF()
            reiniciarVotacao()
        }
        else {
            caixas[0].style.border = "2px solid red"
            return
        }
    }
}

// Função para votar em branco
function votarBranco() {
    if(mensagem.innerText === "Digite o número do seu candidato:") {

        voto = "Branco"
        votos.resultados.push(voto)

        caixas.forEach(caixa => {
            caixa.style.border = "2px solid black"
        })
        limparDigitos()

        mensagem.innerText = "VOTO CONFIRMADO"

        divCandidatos.classList.add("candidatos-desativados")
        divCandidatos.classList.remove("candidatos-ativados")

        divCaixasDeEntrada.classList.add("caixas-desativadas")
        divCaixasDeEntrada.classList.remove("caixas-ativadas")

        mensagemDeErro.innerText = ""

        // Após 2 segundos, restaura o estado para próxima votação
        setTimeout(function() {
            caixas.forEach(caixa => {
                caixa.style.display = "flex"
                caixa.style.border = "2px solid black"
            })
            limparDigitos()
            
            mensagem2.innerText = ""
            mensagem.innerText = "Digite o número do seu candidato:"
    
            divCandidatos.classList.remove("candidatos-ativados")
            divCandidatos.classList.add("candidatos-desativados")
    
            divCaixasDeEntrada.classList.remove("caixas-desativadas")
            divCaixasDeEntrada.classList.add("caixas-ativadas")
    
            
            console.log(candidatosPorTurma[ano][turma])
    
            mensagemDeErro.innerText = ""
        }, 2000) // 2000 milissegundos = 2 segundos

        return
    }
}

// Função para verificar se um número de candidato existe em uma turma de um determinado ano
function verificarNumeroCandidato(ano, turma, numero) {
    for (let i = 0; i < candidatosPorTurma[ano][turma].length; i++) {
        if (candidatosPorTurma[ano][turma][i].numero === numero) {
            return true
        }
    }
    return false
}

// Função para verificar se um determinado ano existe
function verificarAno(ano) {
    return candidatosPorTurma.hasOwnProperty(ano)
}

// Função para verificar se uma turma existe em um determinado ano
function verificarTurma(ano, turmaTemporaria) {
    return candidatosPorTurma[ano].hasOwnProperty(turmaTemporaria)
}

// Função para reiniciar as variáveis e elementos da votação
function reiniciarVotacao() {
    mensagem.innerText = 'Aperte "Confirma" para iniciar a votação!'
    mensagem2.innerText = ''
    mensagemDeErro.innerText = ''

    caixas.forEach(caixa => {
        caixa.style.border = "2px solid black"
    })

    divCandidatos.classList.add("candidatos-desativados")
    divCandidatos.classList.remove("candidatos-ativados")
    divCaixasDeEntrada.classList.remove("caixas-ativadas")
    divCaixasDeEntrada.classList.add("caixas-desativadas")

    limparDigitos()

    votos = {
        "ano": "",
        "turma": "",
        "resultados": []
    }

    ano = ''
    turma = ''
}




// Função para gerar um PDF com os resultados da votação
function gerarPDF() {

    // Recuperar os dados da votação atual
    let anoAtual = votos.ano
    let turmaAtual = votos.turma
    let candidatosVotacao = candidatosPorTurma[anoAtual][turmaAtual]
    let resultados = votos.resultados
    let contagemVotosVálidos = []
    let qtdVotosBrancos = 0
    let qtdTotalVotos = 0
    let data = new Date()
    let meninasVotadas = []
    let meninosVotados = []
    let meninasMaisVotadas = []
    let meninosMaisVotados = []

    // Elemento temporário para o conteúdo do PDF
    let conteudoHTML = document.createElement('div')
    conteudoHTML.style.display = 'flex'
    conteudoHTML.style.flexDirection = 'column'
    conteudoHTML.style.alignItems = 'center'
    conteudoHTML.style.justifyContent = 'center'
    conteudoHTML.style.padding = '2em'
    conteudoHTML.style.fontWeight = '500'

    // Adicionar título ao PDF
    let titulo = document.createElement('h1')
    titulo.textContent = `Eleição ${anoAtual}° ano, turma ${turmaAtual}`
    conteudoHTML.appendChild(titulo)

    // Adicionar ao PDF a data e a hora em que ele foi gerado
    let dataFormatada = document.createElement('p')
    dataFormatada.textContent = `Data: ${data.toLocaleString()}`
    conteudoHTML.appendChild(dataFormatada)
    conteudoHTML.innerHTML += '<br>'
    conteudoHTML.innerHTML += '<br>'


    // Adicionar lista com todos os candidatos
    let subtitulo1 = document.createElement('h2')
    subtitulo1.textContent = "Candidatos:"
    conteudoHTML.appendChild(subtitulo1)

    let listaCandidatos = document.createElement('ol')
    candidatosVotacao.forEach((candidato, index) => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<strong>Nome:</strong> ${candidato.nome}, <strong>Número:</strong> ${candidato.numero}`
        listaCandidatos.appendChild(listItem)
    })
    conteudoHTML.appendChild(listaCandidatos)

    conteudoHTML.innerHTML += '<br>'
    conteudoHTML.innerHTML += '<br>'


    // Contagem de votos válidos e brancos
    candidatosVotacao.forEach((candidato, index) => {
        let qtdVotos = 0

        resultados.forEach(resultado => {
            if(candidato.numero===resultado) {
                qtdVotos++
                qtdTotalVotos++

                // Verificar o sexo do candidato e adicioná-lo ao vetor apropriado
                if (candidato.sexo === 'F') {
                    meninasVotadas.push(candidato)
                } else if (candidato.sexo === 'M') {
                    meninosVotados.push(candidato)
                }
            }
        })

        contagemVotosVálidos.push(qtdVotos)
    })

    resultados.forEach(resultado => {
        if(resultado==="Branco") {
            qtdVotosBrancos++
            qtdTotalVotos++
        }
    })


    // Adicionar estatíticas da votação ao PDF
    let qtdCandidatos = candidatosVotacao.length

    let subtitulo2 = document.createElement('h2')
    subtitulo2.textContent = "Votos:"
    conteudoHTML.appendChild(subtitulo2)

    for(let i=0; i<qtdCandidatos; i++) {
        let resultadoCandidato = document.createElement('p')
        resultadoCandidato.innerHTML = `<strong>Número de votos do candidato ${i+1}:</strong> ${contagemVotosVálidos[i]}`
        conteudoHTML.appendChild(resultadoCandidato)
    }

    let resultadoBranco = document.createElement('p')
    resultadoBranco.innerHTML = `<strong>Número de votos brancos:</strong> ${qtdVotosBrancos}`
    conteudoHTML.appendChild(resultadoBranco)

    let resultadoTotal = document.createElement('p')
    resultadoTotal.innerHTML = `<strong>Número total de votos:</strong> ${qtdTotalVotos}`
    conteudoHTML.appendChild(resultadoTotal)

    conteudoHTML.innerHTML += '<br>'
    conteudoHTML.innerHTML += '<br>'



    // Adicionar mais votados ao PDF
    let subtitulo3 = document.createElement('h2')
    subtitulo3.textContent = "Mais votados:"
    conteudoHTML.appendChild(subtitulo3)

    let candidatoslistados = []


    // Encontrar o número máximo de votos de cada sexo
    let maxVotosMeninas = 0
    let maxVotosMeninos = 0

    candidatosVotacao.forEach(candidato => {
        if (candidato.sexo === 'F') {
            let indiceCandidata = candidatosVotacao.indexOf(candidato)
            if (contagemVotosVálidos[indiceCandidata] > maxVotosMeninas) {
                maxVotosMeninas = contagemVotosVálidos[indiceCandidata]
            }
        }
        else  if (candidato.sexo === 'M') {
            let indiceCandidato = candidatosVotacao.indexOf(candidato)
            if (contagemVotosVálidos[indiceCandidato] > maxVotosMeninos) {
                maxVotosMeninos = contagemVotosVálidos[indiceCandidato]
            }
        }
    })


    // Encontrar as meninas mais votadas
    candidatosVotacao.forEach((candidato, index) => {
        if (candidato.sexo === 'F' && contagemVotosVálidos[index] === maxVotosMeninas) {
            meninasMaisVotadas.push(candidato)
        }
    })

    // Encontrar os meninos mais votados
    candidatosVotacao.forEach((candidato, index) => {
        if (candidato.sexo === 'M' && contagemVotosVálidos[index] === maxVotosMeninos) {
            meninosMaisVotados.push(candidato)
        }
    })



    // Exibir menina(s) mais votada(s)
    let subsubtitulo1 = document.createElement('h4')
    subsubtitulo1.textContent = "Menina(s) mais votada(s):"
    conteudoHTML.appendChild(subsubtitulo1)

    let listaMeninas = document.createElement('ol')
    meninasMaisVotadas.forEach((menina, index) => {
        // Verificar se a menina já foi incluída na listagem
        if (!candidatoslistados.includes(menina)) {
            let meninaFinalista = document.createElement('li')
            meninaFinalista.textContent = `${menina.nome}`
            listaMeninas.appendChild(meninaFinalista)

            candidatoslistados.push(menina);
        }
    })
    conteudoHTML.appendChild(listaMeninas)

    conteudoHTML.innerHTML += '<br>'


    // Exibir menina(s) mais votada(s)
    let subsubtitulo2 = document.createElement('h4')
    subsubtitulo2.textContent = "Menino(s) mais votados(s):"
    conteudoHTML.appendChild(subsubtitulo2)

    let listaMeninos = document.createElement('ol')
    meninosMaisVotados.forEach((menino, index) => {
        // Verificar se o menino já foi incluído na listagem
        if (!candidatoslistados.includes(menino)) {
            let meninoFinalista = document.createElement('li')
            meninoFinalista.textContent = `${menino.nome}`
            listaMeninos.appendChild(meninoFinalista)

            candidatoslistados.push(menino);
        }
    })
    conteudoHTML.appendChild(listaMeninos)



    // Gerar o nome do arquivo com base no ano, turma e data
    let nomeArquivo = `resultado_eleicao_${anoAtual}ano_turma${turmaAtual}_dia${data.getDate()}.pdf`;
    
    // Gerar o PDF a partir do conteúdo HTML
    html2pdf().from(conteudoHTML).save(nomeArquivo)
}