using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        private QuotesContext _context;
        public SampleDataController(QuotesContext context)
        {
            _context = context;
        }


        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<Quotes> getQuotes()
        {
            
            //System.Console.WriteLine("***********************************************88Getting Quotes");
            IEnumerable<Quotes> quotes = _context.Quotes.OrderByDescending(a => a.CreatedAt);
            if (quotes.Count()>0)
            {
                return quotes;
            }
            else
            {
                return Enumerable.Empty<Quotes>();
            }
            

        }

        [HttpPost("[action]")]
        public IEnumerable<Quotes> addQuote([FromBody]Quotes quotes)
        {
            string author = quotes.Author as string;

            IEnumerable<Quotes> queriedQuotes = _context.Quotes.Where(a => a.Stuff == quotes.Stuff as string);

            if (queriedQuotes.Any())
            {
                queriedQuotes = _context.Quotes.OrderByDescending(a => a.CreatedAt);
                return queriedQuotes;
            }

            Quotes q = new Quotes
            {
                Stuff = quotes.Stuff as string,
                Author = author,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now

            };

            _context.Quotes.Add(q);
            _context.SaveChanges();


            queriedQuotes = _context.Quotes.OrderByDescending(a => a.CreatedAt);
            return queriedQuotes;


        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
