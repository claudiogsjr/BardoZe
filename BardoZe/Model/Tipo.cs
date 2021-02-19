using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BardoZe.Model
{
    [Table("Tipo")]
    public class Tipo
    {
        [Column("Id")]
        public int Id { get; set; }
        [Column("TP_Conta")]
        public String TP_Conta { get; set; }
    }
}
