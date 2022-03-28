using InternsApp.Models;
using InternsApp.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsApp.Service
{
    public class InternCollectionService : IInternCollectionService
    {
        private readonly IMongoCollection<Intern> _intern;

        public InternCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _intern = database.GetCollection<Intern>(settings.InternCollectionName);
        }

        public async Task<bool> Create(Intern task)
        {
            await _intern.InsertOneAsync(task);
            return true;
        }


        public async Task<bool> Delete(Guid CNP)
        {
            var result = await _intern.DeleteOneAsync(intern => intern.Id == CNP);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }


        public async Task<Intern> Get(Guid CNP)
        {

            return (await _intern.FindAsync(intern => intern.Id == CNP)).FirstOrDefault();
        }

        public async Task<List<Intern>> GetAll()
        {
            var result = await _intern.FindAsync(task => true);
            return result.ToList();

        }

        public async Task<bool> Update(Guid CNP, Intern intern)
        {
            intern.Id = CNP;
            var result = await _intern.ReplaceOneAsync(intern => intern.Id == CNP, intern);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _intern.InsertOneAsync(intern);
                return false;
            }

            return true;
        }
    }
}
