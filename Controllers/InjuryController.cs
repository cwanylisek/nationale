using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace nationale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InjuryController : Controller
    {

        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<Injury> Index(int parameter1)
        {
            var injuriesList = new List<Injury>();
            for (int i = 0; i < parameter1; i ++)
            {
                injuriesList.Append(new Injury { Id = i , InjuryName = "dupa" });
            }
            return injuriesList;
        }
    }


    public class Injury
    { //.net class
        public int Id { get; set; }
        public string InjuryName { get; set; }
    }
}