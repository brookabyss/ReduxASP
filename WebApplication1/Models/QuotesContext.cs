using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class QuotesContext: DbContext
    {
        public DbSet<Quotes> Quotes { get; set; }

        public QuotesContext(DbContextOptions<QuotesContext> options)
            : base(options)
        { }
    }
}
