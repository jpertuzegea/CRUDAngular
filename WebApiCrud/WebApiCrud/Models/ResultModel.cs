using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiCrud.Models
{
    public class ResultModel
    {
        public bool HasError { get; set; }
        public string? Message { get; set; }
        public object? Data { get; set; }

    }
}
