﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Ubboat_Adm.Model
{
    [Table("Contas")]
    public class Contas
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public String Descricao { get; set; }
        public Double Valor { get; set; }
        public Double Desconto { get; set; }
        public Double Juros { get; set; }
        public Double Taxa { get; set; }
        public Double Valor_Final { get; set; }
        public DateTime Dt_Vencimento { get; set; }
        public DateTime Dt_Pagamento { get; set; }
        public Tipo Tipo_Conta { get; set; }

        public int TipoId { get; set; }


    }
}
