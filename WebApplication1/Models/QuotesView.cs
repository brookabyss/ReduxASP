using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;


namespace WebApplication1.Models
{
    public class QuotesView
    {
        [Required]
        [MinLength(2, ErrorMessage ="A quote has to be more than 2 characters.")]
        public string Stuff { get; set; }

        [Required]
        [MinLength(2, ErrorMessage = "The Author's name is required.")]
        public string Author { get; set; }

    }
}
