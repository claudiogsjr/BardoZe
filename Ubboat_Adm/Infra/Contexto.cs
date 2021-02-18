using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ubboat_Adm.Model;

namespace Ubboat_Adm.Infra
{
    public class Contexto: DbContext
    {
           public Contexto(DbContextOptions<Contexto> options) : base(options)
             {
            Database.EnsureCreated();
             }

        public DbSet<Contas> Conta { get; set;}
        public DbSet<Tipo> Tipo { get; set; }
    }
}
