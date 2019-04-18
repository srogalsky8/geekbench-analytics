import csv
import numpy as np
import matplotlib.pyplot as plt
scores = list(csv.reader(open('dist/surface-latest-50.csv'), delimiter=','))
scores = np.array(scores[1:])
sp6Scores = scores[(scores[:,2] == 'Microsoft Corporation Surface Pro 6')]
sp6Values = (sp6Scores[:, [8, 9]]).astype(np.float)
sp6Mean = (np.mean(sp6Values, axis=0))
sp6StdDev = (np.std(sp6Values, axis=0))
# values = (scores[:, [8, 9]]).astype(np.float)
# print(np.mean(values, axis=0))
# print(np.std(values, axis=0))

y = ['singleCore', 'multiCore']
x = sp6Mean
e = sp6StdDev

print(x)
print(e)

plt.plot(x, y, linestyle='None', marker='^')

plt.show()
