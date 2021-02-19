using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BardoZe.Model;

namespace BardoZe.Infra
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
