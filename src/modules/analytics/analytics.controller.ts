import { Controller, Get, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { RolesGuard } from 'src/common/guards/authorization.guards';
import { Role } from 'src/DB/enums/user.enum';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('admin/analytics') // مسار مخصص للأدمن
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  // بما أنك تستخدم Global Guard، فلن تحتاج لـ @UseGuards(AuthGuard)
  // نحتاج فقط لتحديد أن هذا المسار للأدمن حصراً
  @Get('dashboard')
  @Roles(Role.admin)
  async getDashboardStats() {
    return await this.analyticsService.getAdminDashboardStats();
  }
}
