using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using ShopCoAPI.Infrastructure.Repositories;
using ShopCoAPI.Infrastructure.Persistance;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Model;

namespace ShopCoAPI.Infrastructure.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {

        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, string mongoConnectionString, string databaseName, string firebaseCredentalsPath)
        {
            services.AddSingleton<IMongoClient>(s => new MongoClient(mongoConnectionString));
            services.AddSingleton(s => s.GetRequiredService<IMongoClient>().GetDatabase(databaseName));

            FirebaseApp.Create(new AppOptions
            {
                Credential = GoogleCredential.FromFile(firebaseCredentalsPath)
            });

            //FirestoreDb firestoreDb = FirestoreDb.Create("ecommerceead-c19d4");
            services.AddSingleton(FirestoreDb.Create("shopco-f3341"));
            //services.AddSingleton(firestoreDb);
            services.AddTransient<VendorProductRepository>();
            services.AddTransient<ApplicationDbContext>();
            services.AddTransient<UserRepository>();
            services.AddTransient<OrderRepository>();
            services.AddTransient<FeedbackRepository>();
            services.AddTransient<NotificationRepository>();

            return services;
        }
        //public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        //{
        //    // Register the database context with dependency injection
        //    //services.AddDbContext<ApplicationDbContext>(options =>
        //    //    options.UseSqlServer(
        //    //        configuration.GetConnectionString("DefaultConnection"),
        //    //        b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));

        //    // Register other infrastructure services (e.g., logging, email service, external APIs)
        //    // Example: services.AddTransient<IEmailService, EmailService>();

        //    // Register additional infrastructure dependencies
        //    // Example: services.AddScoped<IFileStorageService, FileStorageService>();

        //    return services;
        //}


    }
}
