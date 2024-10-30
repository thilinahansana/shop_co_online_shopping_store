using System.Threading.Tasks;
using System.Collections.Generic;
using ShopCoAPI.Application.DTOs.ProductDTO;
using ShopCoAPI.Core.Entities.OrderEntity;
using ShopCoAPI.Application.DTOs.OrderDTO;

namespace ShopCoAPI.Application.Interfaces
{
    // IVendorProductService interface
    public interface IVendorProductService
    {
        Task CreateVendorProductAsync(VendorProductDTO productDTO);
        Task UpdateVendorProductAsync(string productId, VendorProductDTO productDTO);
        Task<string> DeleteVendorProductAsync(string productId);
        Task<List<VendorProductDTO>> GetAllProductsAsync();
        Task<List<VendorProductDTO>> GetAllVendorProductsAsync(string vendorId);
        Task<VendorProductDTO> GetVendorProductByIdAsync(string productId);
        Task ManageVendorStockLevelsAsync(string productId, int quantityChange);
        Task NotifyVendorLowStockAsync(string productId);
        Task<VendorOrderDTO> GetOrderDetailsAsync(string orderId);
        Task<List<VendorOrderDTO>> GetAllAvailableOrdersAsync(string vendorId);
        Task<bool> ToggleProductActivationAsync(string productId); // Toggle product activation status
    }
}
