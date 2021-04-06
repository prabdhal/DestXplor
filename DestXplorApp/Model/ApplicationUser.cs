﻿using Microsoft.AspNetCore.Identity;

namespace DestXplorApp.Model
{
  public class ApplicationUser : IdentityUser
  {
    [PersonalData]
    public string FirstName { get; set; }

    [PersonalData]
    public string LastName { get; set; }
  }
}
