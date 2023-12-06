//task #1: create getSleepHours function w/parameter named day:
const getSleepHours = day => {

  //task #2: add days of the week and number of hours slept each night
    if (day === 'monday') {
      return 7;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 7;
    } else if (day === 'thursday') {
      return 7;
    } else if (day === 'friday') {
      return 9;
    } else if (day === 'saturday') {
      return 9;
    } else if (day === 'sunday') {
      return 9;
    }
  };
  
  //task #3: test the getSleepHours function
  console.log(getSleepHours('thursday'));
  
  //task #4: create a function to calculate actual sleep hours + task #5: implicit return
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  //testing the actual sleep hours function
  console.log(getActualSleepHours())
  
  //task #6: ideal sleep hours function
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  
  //task #7:  testing the ideal sleel hours & ideal hours functions
  console.log(getIdealSleepHours());
  
  //task #8: functions to calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    //task #9: checking if I'm hitting my ideal sleep hours or not
    //task #10: added calculations for sleep debt to functions
    if(actualSleepHours === idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) of sleep! You met your snooze goal for the week!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) less sleep than you needed this week. ZzZzzzZ\'s are required.');
    } else if(actualSleepHours < idealSleepHours) {
      console.log('Need a bit more sleep..zZzz...You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) of sleep..ZzZ.');
    }
  };
  
  //Task #11: caclculating sleep debt
  calculateSleepDebt();
  
