using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pclasses
{
    class Mensalista : Empregado
    {

        public double SalarioMensal{ get; set; }

        public Mensalista() // construtor tem o nome da classe
        {
                
        }

        public Mensalista(int matx, string nomex, DateTime datax, double salariox)
        {
            Matricula = matx;
            NomeEmpregado = nomex;
            DataEntradaEmpresa = datax;
            SalarioMensal = salariox;
        }

        public override double SalarioBruto()
        {
            return SalarioMensal;
        }

    }
}
