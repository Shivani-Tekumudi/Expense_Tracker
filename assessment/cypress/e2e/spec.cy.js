describe('Expense Tracker Tests', () => {
  beforeEach(() => {
    // Visit the application root
    cy.visit('http://localhost:3000'); // Replace with your app's URL
  });
  it('should load the home page correctly', () => {
  cy.contains('Expense Tracker'); // Check if the heading is present
  cy.get('h1').should('have.text', 'Expense Tracker');
  });
  
  it('should display wallet balance and expenses cards', () => {
  cy.contains('Wallet Balance'); // Check Wallet Balance card is present
  cy.contains('Expenses'); // Check Expenses card is present
  });

  it('should have a visible header with correct text', () => {
    // Check if the header exists and contains the correct text
    cy.get('h1').should('be.visible').and('have.text', 'Expense Tracker');
  });

  it('should have a button to add income and it should be styled correctly', () => {
    // Check if the Add Income button is present
    cy.contains('+ Add Income').should('be.visible');    
    // Check if the button is enabled and clickable
    cy.get('button').contains('+ Add Income').should('not.be.disabled').click();
  });

  it('should be responsive for mobile view', () => {
    // Check mobile view (iPhone 6)
    cy.viewport('iphone-6');
    
    // Ensure key elements are visible in mobile view
    cy.get('h1').should('be.visible');
    cy.contains('+ Add Income').should('be.visible');
    cy.contains('+ Add Expense').should('be.visible');
    cy.contains('Wallet Balance').should('be.visible');
    cy.contains('Expenses').should('be.visible');
  });

  it('Loads the homepage correctly', () => {
    // Check if the title is displayed
    cy.contains('h1', 'Expense Tracker').should('exist');

    // Check if cards are rendered
    cy.contains('Wallet Balance').should('exist');
    cy.contains('Expenses').should('exist');


  });

  it('Adds an income successfully', () => {
    // Open Add Income modal
    cy.contains('+ Add Income').click();
  
    // Fill the form and submit
    cy.get('input[type="number"][placeholder="Income Amount"]').type('2000');
    cy.get('button[type="submit"]').contains('Add Balance').click();
  
    // Verify that balance is updated
    cy.contains('Wallet Balance').parent().contains('7000'); // Adjust based on initial state
  });
  
  it('Displays added expense in the transaction list', () => {
    // Open Add Expense modal
    cy.contains('+ Add Expense').click();
  
    // Fill the form and submit
    cy.get('input[name="title"]').type('Dinner'); // Targeting the title input
    cy.get('input[name="price"]').type('500'); // Targeting the price input
    cy.get('select[name="category"]').select('Food'); // Select category
    cy.get('input[name="date"]').type('2024-12-18'); // Add date (ensure format matches your app)
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the transaction is added to the list
    cy.contains('Transactions').should('exist'); // Ensure the Transactions section is present
    cy.contains('Dinner').should('exist'); // Verify that the 'Dinner' transaction appears in the list
    cy.contains('500').should('exist'); // Verify that the amount '500' is displayed in the transaction list

    // for second 

    cy.contains('+ Add Expense').click();

    // Fill the form and submit
    cy.get('input[name="title"]').type('Movie Night');
    cy.get('input[name="price"]').type('300');
    cy.get('select[name="category"]').select('Entertainment');
    cy.get('input[name="date"]').type('2024-12-19');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
  
    // Verify that the transaction is added to the list
    cy.contains('Transactions').should('exist'); // Ensure the Transactions section is present
    cy.contains('Movie Night').should('exist'); // Verify that the 'Dinner' transaction appears in the list
    cy.contains('300').should('exist'); // Verify that the amount '500' is displayed in the transaction list
    cy.contains('Wallet Balance').parent().contains('4200'); // Adjust based on initial state
  });

  it('Displays added food and travel expenses in the transaction list', () => {
    // Add Food Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Lunch');
    cy.get('input[name="price"]').type('200');
    cy.get('select[name="category"]').select('Food');
    cy.get('input[name="date"]').type('2024-12-18');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Food expense is added
    cy.contains('Transactions').should('exist');
    cy.contains('Lunch').should('exist');
    cy.contains('200').should('exist');
  
    // Add Travel Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Flight');
    cy.get('input[name="price"]').type('1200');
    cy.get('select[name="category"]').select('Travel');
    cy.get('input[name="date"]').type('2024-12-19');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Travel expense is added and the updated balance
    cy.contains('Transactions').should('exist');
    cy.contains('Flight').should('exist');
    cy.contains('1200').should('exist');
    cy.contains('Wallet Balance').parent().contains('3600'); // Adjust based on initial state
  });

  it('Displays added travel and entertainment expenses in the transaction list', () => {
    // Add Travel Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Hotel Stay');
    cy.get('input[name="price"]').type('1500');
    cy.get('select[name="category"]').select('Travel');
    cy.get('input[name="date"]').type('2024-12-20');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Travel expense is added
    cy.contains('Transactions').should('exist');
    cy.contains('Hotel Stay').should('exist');
    cy.contains('1500').should('exist');
  
    // Add Entertainment Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Concert');
    cy.get('input[name="price"]').type('500');
    cy.get('select[name="category"]').select('Entertainment');
    cy.get('input[name="date"]').type('2024-12-21');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Entertainment expense is added and the updated balance
    cy.contains('Transactions').should('exist');
    cy.contains('Concert').should('exist');
    cy.contains('500').should('exist');
    cy.contains('Wallet Balance').parent().contains('3000'); // Adjust based on initial state
  });

  it('Displays added food, travel, and entertainment expenses in the transaction list', () => {
    // Add Food Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Brunch');
    cy.get('input[name="price"]').type('400');
    cy.get('select[name="category"]').select('Food');
    cy.get('input[name="date"]').type('2024-12-18');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Food expense is added
    cy.contains('Transactions').should('exist');
    cy.contains('Brunch').should('exist');
    cy.contains('400').should('exist');
  
    // Add Travel Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Train Ticket');
    cy.get('input[name="price"]').type('1000');
    cy.get('select[name="category"]').select('Travel');
    cy.get('input[name="date"]').type('2024-12-19');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Travel expense is added
    cy.contains('Transactions').should('exist');
    cy.contains('Train Ticket').should('exist');
    cy.contains('1000').should('exist');
  
    // Add Entertainment Expense
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Movie Night');
    cy.get('input[name="price"]').type('600');
    cy.get('select[name="category"]').select('Entertainment');
    cy.get('input[name="date"]').type('2024-12-20');
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Verify that the Entertainment expense is added and the updated balance
    cy.contains('Transactions').should('exist');
    cy.contains('Movie Night').should('exist');
    cy.contains('600').should('exist');
    cy.contains('Wallet Balance').parent().contains('3000'); // Adjust based on initial state
  });
  
  it('Persists data in localStorage', () => {
    // Add a transaction
    cy.contains('+ Add Expense').click();
    cy.get('input[name="title"]').type('Gym'); // Correcting input name for consistency
    cy.get('input[name="price"]').type('1000'); // Corrected input name for price
    cy.get('select[name="category"]').select('Entertainment');
    cy.get('input[name="date"]').type('2024-12-20'); // Adding the missing date input
    cy.get('button[type="submit"]').contains('Add Expense').click();
  
    // Ensure data is persisted in localStorage
    cy.window().then((win) => {
      const localStorageData = win.localStorage.getItem('expenses'); // Assuming data is saved in 'expenses'
      expect(localStorageData).to.not.be.null; // Ensure something is stored
      const expenses = JSON.parse(localStorageData);
      expect(expenses).to.have.length.greaterThan(0); // Ensure that there's at least one expense saved
    });
  
    // Reload the page
    cy.reload();
  
    // Check if data persists
    cy.contains('Gym').should('exist');
    cy.contains('1000').should('exist');
  });
});