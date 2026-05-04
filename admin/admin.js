// Hotel Sai Shahu - Admin Script

document.addEventListener('DOMContentLoaded', () => {
    const totalBookingsEl = document.getElementById('total-bookings');
    const bookingsTbody = document.getElementById('bookings-tbody');

    function loadStats() {
        const roomBookings = JSON.parse(localStorage.getItem('roomBookings')) || [];
        const tableReservations = JSON.parse(localStorage.getItem('tableReservations')) || [];
        const eventEnquiries = JSON.parse(localStorage.getItem('eventEnquiries')) || [];

        const total = roomBookings.length + tableReservations.length + eventEnquiries.length;
        if (totalBookingsEl) totalBookingsEl.textContent = 124 + total; // Static base + dynamic

        // Load dynamic bookings into table
        if (bookingsTbody) {
            roomBookings.forEach(booking => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>#BK${booking.id.toString().slice(-4)}</td>
                    <td>Guest</td>
                    <td>${booking.guests} Guests</td>
                    <td>${booking.checkin}</td>
                    <td><span class="status pending">New Enquiry</span></td>
                    <td><button class="action-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                `;
                bookingsTbody.prepend(tr);
            });
        }
    }

    loadStats();
});
