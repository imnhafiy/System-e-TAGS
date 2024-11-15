// Load Google Charts library
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawAllCharts);

function drawAllCharts() {
    drawIncomeVsExpensesChart();
    drawExpenseBreakdownChart();
    drawMonthlyExpensesChart();
    drawCashFlowChart();
}

// Chart 1: Income vs Expenses (Bar Chart)
function drawIncomeVsExpensesChart() {
    const data = google.visualization.arrayToDataTable([
        ['Category', 'Amount'],
        ['Income', 10000],
        ['Expenses', 6000]
    ]);

    const options = {
        title: 'Income vs Expenses',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Amount (RM)',
            minValue: 0
        },
        vAxis: {
            title: 'Category'
        }
    };

    const chart = new google.visualization.BarChart(document.getElementById('income_vs_expenses_chart'));
    chart.draw(data, options);
}

// Chart 2: Expense Breakdown (Pie Chart)
function drawExpenseBreakdownChart() {
    const data = google.visualization.arrayToDataTable([
        ['Category', 'Amount'],
        ['Salaries', 3000],
        ['Utilities', 1000],
        ['Office Supplies', 500],
        ['Miscellaneous', 1500]
    ]);

    const options = {
        title: 'Expense Breakdown',
        is3D: true
    };

    const chart = new google.visualization.PieChart(document.getElementById('expense_breakdown_chart'));
    chart.draw(data, options);
}

// Chart 3: Monthly Expenses (Line Chart)
function drawMonthlyExpensesChart() {
    const data = google.visualization.arrayToDataTable([
        ['Month', 'Expenses'],
        ['January', 500],
        ['February', 800],
        ['March', 1000],
        ['April', 900],
        ['May', 1200],
        ['June', 1100],
        ['July', 950],
        ['August', 1250],
        ['September', 1300],
        ['October', 1400],
        ['November', 1600],
        ['December', 1700]
    ]);

    const options = {
        title: 'Monthly Expenses',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    const chart = new google.visualization.LineChart(document.getElementById('monthly_expenses_chart'));
    chart.draw(data, options);
}

// Chart 4: Cash Flow (Bar Chart)
function drawCashFlowChart() {
    const data = google.visualization.arrayToDataTable([
        ['Month', 'Income', 'Expenses'],
        ['January', 1000, 500],
        ['February', 1200, 800],
        ['March', 1500, 1000],
        ['April', 1300, 900],
        ['May', 1700, 1200],
        ['June', 1600, 1100],
        ['July', 1400, 950],
        ['August', 1800, 1250],
        ['September', 1900, 1300],
        ['October', 2000, 1400],
        ['November', 2200, 1600],
        ['December', 2300, 1700]
    ]);

    const options = {
        title: 'Monthly Cash Flow',
        chartArea: { width: '50%' },
        hAxis: {
            title: 'Amount (RM)',
            minValue: 0
        },
        vAxis: {
            title: 'Month'
        },
        bars: 'horizontal'
    };

    const chart = new google.visualization.BarChart(document.getElementById('cash_flow_chart'));
    chart.draw(data, options);
}
