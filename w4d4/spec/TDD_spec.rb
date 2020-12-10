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

    describe "my_transpose" do
        it "should take a 2-D array that is a square" do
            transpose = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]]
            expect(transpose.length).to eq(transpose[0].length)
        end
    end
end