
function gpacalc()
{
//define valid grades and their values
var Grade = new Array(9);
var points = new Array(9);
var input_Grade = new Array(8);
var input_credit = new Array(8);

// define valid grades and their values
var grade_count = 9;

Grade[0] = "A+";
Grade[1] = "A";
Grade[2] = "B+";
Grade[3] = "B";
Grade[4] = "C+";
Grade[5] = "C";
Grade[6] = "D+";
Grade[7] = "D";
Grade[8] = "F";


points[0] = 4;
points[1] = 3.75;
points[2] = 3.4;
points[3] = 3.1;
points[4] = 2.8;
points[5] = 2.5;
points[6] = 2.25;
points[7] = 2;
points[8] = 1;
// retrieve user input
input_Grade[0] = document.GPACalcForm.GRADE1.value;
input_Grade[1] = document.GPACalcForm.GRADE2.value;
input_Grade[2] = document.GPACalcForm.GRADE3.value;
input_Grade[3] = document.GPACalcForm.GRADE4.value;
input_Grade[4] = document.GPACalcForm.GRADE5.value;
input_Grade[5] = document.GPACalcForm.GRADE6.value;
input_Grade[6] = document.GPACalcForm.GRADE7.value;
input_Grade[7] = document.GPACalcForm.ACCUMULATIVEGPAGRADE.value;
input_credit[0] = document.GPACalcForm.CREDIT1.value;
input_credit[1] = document.GPACalcForm.CREDIT2.value;
input_credit[2] = document.GPACalcForm.CREDIT3.value;
input_credit[3] = document.GPACalcForm.CREDIT4.value;
input_credit[4] = document.GPACalcForm.CREDIT5.value;
input_credit[5] = document.GPACalcForm.CREDIT6.value;
input_credit[6] = document.GPACalcForm.CREDIT7.value;
input_credit[7] = document.GPACalcForm.ACCUMULATIVEGPACREDIT.value;

// Calculate GPA
var allgrades =0;
var allhours = 0;
var gpa = 0;
for (var i = 0; i < 8; i++)
        {
        if (input_Grade[i] == "") break;

        if (isNaN(parseInt(input_credit[i]))) alert("Error- You did not enter a numeric  credits value for Subject If the Subject is worth 0 credits then enter the number 0 in  the field.");

        var validgrcheck = 0;
        for (var j = 0; j < grade_count; j++)
                {
                if (input_Grade[i] == Grade[j])
                        {
                        allgrades += (parseInt(input_credit [i],10) * points[j]);
                        allhours  += parseInt(input_credit[i],10);
                        validgrcheck = 1;
                        break;
                        }
                }
        if (validgrcheck == 0)
                {
                alert("Error- Could not recognize the grade entered for Subject " + eval(i +  1) + ". Please use standard college grades in the form of A+ A B+ ...F.");
                return 0;
                }
        }

// this if-check prevents a divide by zero error
if (allhours == 0)
        {
        alert("Error- You did not enter any credit value!");
        return 0;
        }

gpa = allgrades / allhours;

alert("GPA =  " + gpa);

return 0;
}
