
require "rspec"
require "TDD"

describe Array do
    describe "#my_uniq" do
        it "removes duplicates" do
            expect([1, 2, 1, 3, 3].my_uniq).to eq([1,2,3])
        end
        it "returns uniq array at the same order they appeared" do
            expect([7, 7, 8, 8, 3].my_uniq).to eq([7, 8, 3])
        end
    end

    describe "#two_sum" do
        it "finds positions where elements equal to 0" do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
        end

        it "each pair should be sorted from smaller to bigger" do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
            expect([-1, 0, 2, -2, 1].two_sum).to_not eq([[4,0],[3,2]])
        end
    end

    describe "#my_transpose" do
        it "should take a 2-D array that is a square" do
            transpose = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]]
            expect(transpose.length).to eq(transpose[0].length)
        end

        it "should transpose rows and cols" do
            transpose = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]]
            expect(transpose.my_transpose).to eq([[0, 3, 6],
                                                [1, 4, 7],
                                                [2, 5, 8]])
        end

    end

    describe "#stock_picker" do
        # [25, 5, 10, 15] => [5, 15]
        it "returns most profitable pair" do
            pairs = [25, 5, 10, 15]
            expect(pairs.stock_picker).to eq([5, 15])
        end
        it "does not sell stock before buying" do
            pairs = [25, 5, 10, 15]
            output = pairs.stock_picker
            expect(pairs.index(output[0])).to be < (pairs.index(output[1]))
        end
    end
end

describe Hanoi do
    subject (:hanoi) {Hanoi.new}
    describe "#initialize" do
        it "creates instance variable of board" do
            expect(hanoi.board).to eq(Array.new(3) {[]})
        end
    end

    describe "#store_tower" do 
        it "stores first arr with discs" do 
            expect(hanoi.board[0]).to eq([1,2,3,4])
        end
    end

    describe "#move" do 
        it "should ask user to choose a stack number from start to end" do
            allow($stdin).to recieve(:gets).and_return('1')
            user_input = @stdin.gets
            expect(user_input).to eq('1')
        end
        context "when the disk is moved" do 
            it "should move a disk based on input" do 
                input = [0, 2]
                disk = hanoi.board[0].shift
                expect(hanoi.board[0]).not_to include(disk)
            end
            it "move disk to correct end" do
                input = [0, 2]
                disk = hanoi.board[0].shift
                expect(hanoi.board[2][0]).to eq(disk)
            end
        end
    end
    describe "#won?" do
        it "expects last array to have all the disks in order" do
            expect(hanoi.board[2]).to eq([1, 2, 3, 4])
        end 
    end


end