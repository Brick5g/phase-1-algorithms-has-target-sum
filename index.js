function hasTargetSum(array, target) {
  const targetSum = new Set();
  for (const num of array) {
    const value = target - num;
    if (targetSum.has(value)) {
      return true;
    }
    targetSum.add(num);
  }
  return false;
}

/* 
  The complexity of this algorithm is O(n) because we iterate through the array once, and each lookup and insertion operation in the set is O(1) on average. 
  The space complexity is also O(n) in the worst case if all numbers in the array are unique and we add them to the set.
*/

/* 
  //Psuedocode:
  // create a set to store the numbers we have seen so far
  // iterate through each number in the array
  // for each number, calculate the value (target - current number)
  // check if the value is in the set
  // if it is, return true (we found a pair that sums to the target)
  // if it is not, add the current number to the set
  // if we finish iterating through the array without finding a pair, return false
*/

/*
  For the test this is what it's asking for: 
  hasTargetSum
    returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10
    returns true when the array is [22, 19, 4, 6, 30] and the target is 25
    returns false when the array is [1, 2, 5] and the target is 4
    returns true when the array is [-7, 10, 4, 8] and the target is 3
    returns true when the array is [1, 2, 3, 4] and the target is 5
    returns true when the array is [2, 2, 3, 3] and the target is 4
    returns false when the array is [4] and the target is 4

  // The way I wrote the function should pass every test
     The new variable const for targetSum is a set that will store the numbers we have seen so far.
     We iterate through each number in the array using a for...of loop.
     For each number, we calculate the value by subtracting the current number from the target.
     We check if this value is already in the targetSum set. If it is, that means we have found a pair of numbers that add up to the target, so we return true.
     If the value is not in the set, we add the current number to the set and continue iterating.
     If we finish iterating through the array without finding any pairs that sum to the target, we return false.
     This is a standard for/if loop. Yes Liam is rubbing off on us.  
*/


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
