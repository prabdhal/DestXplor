using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DestXplorApp.Model
{
  public class Comment
  {
    public int Id { get; set; }

    public Itinerary Itinerary { get; set; }

    [Required]
    public ApplicationUser Author { get; set; }

    public Comment Parent { get; set; }

    public DateTime CreatedOn { get; set; }

    public virtual IEnumerable<Comment> Replies { get; set; }
  }
}
