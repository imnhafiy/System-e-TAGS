// Complaints Chart (existing)
const complaintsCtx = document.getElementById('complaintsChart').getContext('2d');
const complaintsChart = new Chart(complaintsCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Number of Complaints',
            data: [10, 20, 5, 15, 8],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// User Activity Chart (existing)
const userActivityCtx = document.getElementById('userActivityChart').getContext('2d');
const userActivityChart = new Chart(userActivityCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'User Activity',
            data: [12, 15, 10, 14, 9],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Simple Calendar
const calendar = document.getElementById('calendar');
const today = new Date();
calendar.innerHTML = `<h4>${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}</h4>`;

// Recent Complaints Chart
const recentComplaintsCtx = document.getElementById('recentComplaintsChart').getContext('2d');
const recentComplaintsChart = new Chart(recentComplaintsCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Complaints This Week',
            data: [10, 15, 8, 12, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Complaints by State Chart
const complaintsByStateCtx = document.getElementById('complaintsByStateChart').getContext('2d');
const complaintsByStateChart = new Chart(complaintsByStateCtx, {
    type: 'pie',
    data: {
        labels: ['State A', 'State B', 'State C'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#36A2EB', '#FFCE56', '#4CAF50']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Category Breakdown Chart
const categoryBreakdownCtx = document.getElementById('categoryBreakdownChart').getContext('2d');
const categoryBreakdownChart = new Chart(categoryBreakdownCtx, {
    type: 'doughnut',
    data: {
        labels: ['Harassment', 'Discrimination', 'Other'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
