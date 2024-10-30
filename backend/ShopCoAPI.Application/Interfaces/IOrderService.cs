

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShopCoAPI.Application.DTOs.OrderDTO;
using ShopCoAPI.Core.Entities.OrderEntity;

namespace ShopCoAPI.Application.Interfaces
{
    public interface IOrderService
    {
        // Create a new order
        Task CreateOrderAsync(OrderDTO orderDTO);
        // Retrieve all orders
        Task<List<Order>> GetAllOrdersAsync();
        // Retrieve a specific order
        Task<Order> GetOrderAsync(string orderId);
        // Retrieve a customer's order
        Task<Order> GetCustomerOrderAsync(string customerId);
        // Retrieve a customer's cart order
        Task<OrderResponseDTO> GetCustomerCartOrderAsync(string customerId);
        // Retrieve a customer's placed orders
        Task<List<OrderResponseDTO>> GetCustomerPlacedOrderAsync(string customerId);
        // Get orders by customer
        Task<IEnumerable<Order>> GetOrdersByCustomerAsync(string customerId);
        // Get all cancellation requests
        Task<List<CancelRequest>> GetAllCancellationRequests();
        // Place an order
        Task<string> PlaceOrderAsync(string orderId, string address, string tel);
        // Make a cancellation request
        Task<string> MakeCancelOrderRequestAsync(CancelRequestDTO cancelRequestDTO);
        // Deliver an item
        Task<string> ItemDeliverAsync(string itemId);
        // Respond to a cancellation request
        Task<string> RespondToCancelRequest(CancelRequestDTO cancelRequestDTO);
        // Update order Details
        Task UpdateOrderDetailsAsync(string orderId, OrderDTO orderDTO);
        // Update order status
        Task<string> UpdateOrderStatusAsync(string orderId, string status);
        // Cancel an order
        Task<string> CancelOrderAsync(string orderId, string note, string canceledBy);
        // Remove an item from the cart
        Task<string> RemoveItemFromCart(string orderId, string itemId);
        // Delete an order
        Task DeleteOrderAsync(string orderId);
    }
}
