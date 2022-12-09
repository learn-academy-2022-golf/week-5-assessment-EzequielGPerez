# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN :)

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# I needed to look back to Ruby becuase its been a while and it kind of left my mind a bit. But looking at the blocks I need .select since it uses a boolean value and it filters so it returns a smaller array than the original one. I need to access the array and the letter so I used those in the def method. I used PIPES! 🙌 to be able to get the beverage list. then .include? to see if it had that certain letter in it. then in the implicit return I asked for beverage that does contain that letter in it.

def contain array, letter
array.select do |beverage|
    beverage = beverage.include? letter 
    beverage
    end
end
#  p contain(beverages_array, letter_o)
#  p contain(beverages_array, letter_t)









# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

#This one really gave me a headache until I tried to just simplify it. I needed to make a method bringing in the values only. I was trying to delete the keys but that wasn't working at all. So I just called upon the values instead and that worked. after that it was a breeze. Just flatten (1) time then sort and done. Ruby looks scarier than it really is sometimes. 

def states hash
    hash.values.flatten.sort
end

# p states(us_states)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# I have to create a class then a subclass for a Trek bike. I will make attributes model, wheels, and current speed. I made a subclass for the trek bike and used super to pass down atributes. Then initialize to be able to use them. Then get_info for the string and string interpolation of attributes.

class Bike 
    attr_reader :current_speed 
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end
    def pedal_faster number
        @current_speed += number
      end
      def brake number
        if @current_speed <= number
          @current_speed = 0
        else
          @current_speed -= number
        end
    end
end

class Trek < Bike
    def initialize(model, wheels, current_speed)
      super(model, wheels, current_speed)
    end
  
    def get_info
      "The #{@model} bike has #{@wheels} and is going #{@current_speed} mph."
    end
  end

my_bike = Trek.new('Trek', '2 wheels', '5')

p my_bike.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

p my_bike.pedal_faster(10)

p my_bike.brake(25)

# I used an attr_reader so it can read its value.
 
# I am not sure how to get it to show up in the string interpolation, what could I be missing?

