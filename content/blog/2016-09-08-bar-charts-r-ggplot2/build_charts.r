
library(ggplot2)

d <- data.frame(
  year=factor(sample(2010:2014, 400, replace=T)), 
  continent=factor(sample(c("EU", "US", "Asia"), 400, replace=T)),
  gender=factor(sample(c("male", "female"), 400, replace=T)),
  amount=sample(20:5000, 400, replace=T)
)

# Plain bar chart.

p <- ggplot(data=d, aes(x=year, y=amount)) + geom_bar(stat="identity")
ggsave(p, file="bars_plain.png", width=8, height=6, dpi=100)

# Bar chart with colored bars.

p <- ggplot(data=d, aes(x=year, y=amount, fill=year)) + geom_bar(stat="identity")
ggsave(p, file="bars_coloured.png", width=8, height=6, dpi=100)

# Stacked bars, unsorted.

p <- ggplot(data=d, aes(x=year, y=amount, fill=gender)) + geom_bar(stat="identity")
ggsave(p, file="bars_stacked_unsorted.png", width=8, height=6, dpi=100)

# Stacked bars, sorted.

d <- with(d, d[order(year, gender),])
p <- ggplot(data=d, aes(x=year, y=amount, fill=gender)) + geom_bar(stat="identity")
ggsave(p, file="bars_stacked_sorted.png", width=8, height=6, dpi=100)

# Grouped and stacked.

d <- with(d, d[order(year, gender, continent),])

p <- ggplot(data=d, aes(x=continent, y=amount, fill=gender)) + 
  geom_bar(stat="identity") + 
  facet_grid(~year)
ggsave(p, file="bars_grouped_stacked.png", width=8, height=6, dpi=100)

# Pretty title and labels.

p <- ggplot(data=d, aes(x=continent, y=amount, fill=gender)) + 
  geom_bar(stat="identity") +
  facet_grid(~year) + 
  labs(title="Customer Analysis 2010-2014", x="", y="Amount Spent ($)", fill="Gender") + 
  theme(plot.title = element_text(size=25, margin=margin(t=20, b=20)))
ggsave(p, file="bars_prettified.png", width=8, height=6, dpi=100)
