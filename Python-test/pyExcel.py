import pandas as pd

df = pd.read_excel('Test.xlsx', sheet_name="Regulatory Collateral")

filtered_df = df[df['Uniqueness'] == 'Unique']

writer = pd.ExcelWriter('Unique.xlsx', engine='openpyxl')

filtered_df.to_excel(writer, sheet_name='Filtered', index=False)

writer.book.save('Unique.xlsx')
