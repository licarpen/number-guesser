// IMPORT MODULES under test here:
import { compareNumbers } from '../compare-numbers.js';

const test = QUnit.test;

test('if guess is too low compareNumbers returns -1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 1;
    const correctNumber = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('if guess is correct compareNumbers returns 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 1;
    const correctNumber = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('if guess is too high compareNumbers returns 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 2;
    const correctNumber = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});
