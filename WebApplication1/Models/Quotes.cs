using System;
using System.Collections.Generic;


namespace WebApplication1.Models
{
    public class Quotes
    {
        public int QuotesId { get; set; }

        public string Stuff { get; set; }

        public string Author { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }


        public Quotes()
        {

        }
    }
}
