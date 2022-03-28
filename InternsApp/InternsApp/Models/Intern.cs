using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsApp.Models
{
    public class Intern
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Age { get; set; }
        public string DateOfBirth { get; set; }
    }
}
