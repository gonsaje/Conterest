class BoardLink < ApplicationRecord

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
        
    belongs_to :con,
        foreign_key: :con_id,
        class_name: :Con
end
