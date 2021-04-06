using System.ComponentModel.DataAnnotations.Schema;

namespace DestXplorApp
{
  public class Contact
  {
    public int Id { get; set; }

    [Column(TypeName = "varchar(50)")]
    public string Name { get; set; }

    [Column(TypeName = "varchar(50)")]
    public string Subject { get; set; }

    public string Message { get; set; }
  }
}
