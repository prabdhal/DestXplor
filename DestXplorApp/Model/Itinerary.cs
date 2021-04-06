using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DestXplorApp.Model
{
  public class Itinerary
  {
    public int Id { get; set; }

    [Required]
    public ApplicationUser Author { get; set; }

    [Required]
    public string Country { get; set; }

    [Required]
    public string City { get; set; }

    public DateTime TravelDateFrom { get; set; }

    public DateTime TravelDateTo { get; set; }

    [Required]
    public string AboutDestination { get; set; }

    [Required]
    public float Rating { get; set; }

    public int EstimatedPrice { get; set; }

    public DateTime CreatedAt { get; set; }

    public Comment Parent { get; set; }

    public virtual IEnumerable<Comment> comments { get; set; }
  }
}
