﻿using Microsoft.EntityFrameworkCore;

namespace DestXplorApp.Model
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Contact> Contacts { get; set; }
  }
}