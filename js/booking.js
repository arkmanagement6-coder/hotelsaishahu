// Hotel Sai Shahu - Booking Logic

const Bookings = {
    init() {
        this.roomBookings = JSON.parse(localStorage.getItem('roomBookings')) || [];
        this.tableReservations = JSON.parse(localStorage.getItem('tableReservations')) || [];
        this.eventEnquiries = JSON.parse(localStorage.getItem('eventEnquiries')) || [];
        
        this.bindEvents();
    },

    bindEvents() {
        // Room Booking Form
        const roomForm = document.querySelector('.booking-form');
        if (roomForm) {
            roomForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(roomForm);
                const booking = {
                    id: Date.now(),
                    type: 'room',
                    checkin: formData.get('checkin'),
                    checkout: formData.get('checkout'),
                    guests: formData.get('guests'),
                    status: 'Pending',
                    date: new Date().toISOString()
                };
                this.saveBooking('roomBookings', booking);
                alert('Availability search submitted! In a real system, we would redirect to a selection page.');
            });
        }

        // Table Reservation
        const tableForm = document.querySelector('.reservation-form');
        if (tableForm) {
            tableForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Table reservation received! We will confirm your slot via SMS.');
            });
        }

        // Event Enquiry
        const banquetForm = document.querySelector('.banquet-form');
        if (banquetForm) {
            banquetForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Enquiry sent! Our event manager will call you back shortly.');
            });
        }
    },

    saveBooking(key, data) {
        const current = JSON.parse(localStorage.getItem(key)) || [];
        current.push(data);
        localStorage.setItem(key, JSON.stringify(current));
    }
};

Bookings.init();
