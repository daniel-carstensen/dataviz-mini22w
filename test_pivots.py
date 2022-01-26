import pandas as pd
#import matplotlib as plt
import numpy as np

def print_full(x):
    pd.set_option('display.max_rows', len(x))
    print(x)
    pd.reset_option('display.max_rows')

#m2_url = 'https://raw.githubusercontent.com/katherinel09/socy34_module1-4/main/socy34_data_texas_m2_UPDATED.csv'
#m3_url = 'https://raw.githubusercontent.com/katherinel09/socy34_module1-4/main/socy34_data_texas_m3_UPDATED.csv'



approval = pd.read_csv("/Users/osmankhan/Downloads/approval_data.csv")

print_full(approval)
approval_trunc = approval[['year', 'qrt', 'econapp']]
print_full(approval_trunc)

pivot_appr = approval_trunc.pivot(index='year', columns='qrt', values='econapp')



#print_full(approval_trunc)
#print("\n\n")
print_full(pivot_appr)
#pivot_appr.to_csv("test_out")
#m2 = pd.read_csv(m2_url)
#m3 = pd.read_csv(m3_url)

#print_full(m2)

#print_full(m3)
# is_NaN = m2.isnull()
# row_has_NaN = is_NaN.any(axis=1)
# rows_with_NaN = m3[row_has_NaN]
# print(rows_with_NaN)


# print(m2.head())
# print("----------------")
# print(m3.head())

# print(m3.columns)

# #Let's merge them on County!

#new_m = pd.merge(m2, m3, left_on='County', right_on='County',how='left')


#print_full(new_m)

#print(new_m.columns)

# print("\n\n")
# print(m2.isna().sum())
# print("\n")
# print(m3.isna().sum())
# print("\n")
# print(new_m.isna().sum())

##PIVOT EXAMPLES
