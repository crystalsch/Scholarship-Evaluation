using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsApp.Service
{
    public interface ICollectionService<T>
    {
        Task<List<T>> GetAll();

        Task<T> Get(Guid CNP);

        Task<bool> Create(T model);

        Task<bool> Update(Guid CNP, T model);

        Task<bool> Delete(Guid CNP);
    }
}
