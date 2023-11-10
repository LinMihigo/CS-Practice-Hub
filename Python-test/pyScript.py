import pandas as pd

df = pd.read_excel('Test.xlsx', sheet_name='Regulatory Collateral')

start_row = 1
end_row = 170457

blank_cells_df = df[(df['Customer ID T24'].isnull()) & (df.index>= start_row) & (df.index <= end_row)]

writer = pd.ExcelWriter('blank_cells.xlsx', engine='openpyxl')

blank_cells_df.to_excel(writer, sheet_name='Blank Cells', index=False)

writer.book.save('blank_cells.xlsx')