using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using FluentValidation;
using AutoMapper;
using ShopCoAPI.Application.Features;
using ShopCoAPI.Application.Interfaces;
using ShopCoAPI.Application.Mappings;
using ShopCoAPI.Application.Common;
using ShopCoAPI.Application.Interfaces.NotificationInterfaces;

namespace ShopCoAPI.Application.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // Register MediatR for handling CQRS commands and queries
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

            // Register FluentValidation validators from the assembly
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            // Register AutoMapper with the AutoMapperProfile
            services.AddAutoMapper(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            }, Assembly.GetExecutingAssembly());

            // Register services (including the newly added VendorProductService)
           
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IValidations, ValidationsImpl>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IVendorProductService, VendorProductService>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IFeedbackService, FeedbackService>();
            services.AddScoped<INotificationService, NotificationService>();
            services.AddScoped<IDashboardService, DashboardService>();

            // Add additional services if needed
            //Example: services.AddScoped<IYourService, YourServiceImplementation>();


            return services;
        }
    }
}
